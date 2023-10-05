
import { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import { Link, useNavigate } from "react-router-dom";
import { urlImage } from "../../../config";


function CategoryCreate() {
    const Navigate = useNavigate();
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategory(result.data.categorys)
            });
        })();
    }, [])

    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    const image = document.querySelector("#image");


    async function categoryStore(event) {
        event.preventDefault();
        const category = new FormData();
        category.append("name", name);
        category.append("metadesc", metadesc);
        category.append("metakey", metakey);
        category.append("parent_id", parent_id);
        category.append("sort_order", sort_order);
        category.append("status", status);

        if (image.files.length === 0) {
            alert("Hãy hập thông tin ảnh")

        } else {
            category.append("image", image.files[0]);
            await categoryservice.create(category).then(function (res) {
                alert(res.data.message)
                Navigate('../../admin/category', { replace: true })
            })
        }


    }

    return (
        <form onSubmit={categoryStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm danh mục
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/category" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên danh mục</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {categorys.map(function (cat, index) {
                                        return (<option key={index} value={cat.id}>{cat.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select onChange={(e) => setSortOrder(e.target.value)} value={sort_order} name="sort-order" className="form-control">
                                    <option value="0">None</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.sort_order + 1}>sau:{cat.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default CategoryCreate;