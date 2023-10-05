import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";

function PostUpdate() {
    const navigate = useNavigate();
    //khai báo state
    const [topic_id, setTopicId] = useState(0);
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [status, setStatus] = useState(1);
    //chi tiết mẫu tin có id
    const { id } = useParams("id");
    //const [category, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getById(id)
                .then(function (result) {
                    const tmp = result.data.posts;
                    //setCategory(tmp);
                    setTopicId(tmp.topic_id);
                    setTitle(tmp.title);
                    setDetail(tmp.detail);
                    setType(tmp.type);
                    setMetakey(tmp.metakey);
                    setMetadesc(tmp.metadesc);
                    setStatus(tmp.status);
                });
        })();
    }, []);
    //Lấy danh sách
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setPosts(result.data.posts);
            });
        })();
    }, []);

    //lấy dữ liệu topic
    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopics(result.data.topics);
            });
        })();
    }, []);

    async function postEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("type", type);
        post.append("detail", detail);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("status", status);
        //xử lý ảnh
        if (image.files.length === 0) {
            post.append("image", "");
        } else {
            post.append("image", image.files[0]);
        }
        //update
        await postservice.update(post, id)
            .then(function (res) {
                alert(res.data.message)
                navigate('/admin/post', { replace: true });
            });
    }
    return (
        <form onSubmit={postEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm bài viết</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="topic_id">Mã chủ đề</label>
                                <select
                                    name="topic_id"
                                    className="form-control"
                                    value={topic_id}
                                    onChange={(e) => setTopicId(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {topics.map(function (top, index) {
                                        return (
                                            <option key={index} value={top.id}>
                                                {top.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title">Tiêu đề</label>
                                <input
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control"
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="type">Loại</label>
                                <input
                                    name="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="detail">Chi tiết</label>
                                <textarea
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình ảnh</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PostUpdate;
