<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ConfigController extends Controller
{
    /*lay danh sach thuong hieu*/
    public function index()
    {
        $configs = Config::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'configs'=>$configs],200);
    }

    /*lay thuong hieu bang id -> chi tiet */
    public function show($id){
        if(is_numeric($id)){
            $config = Config::findOrFail($id);
        
        }
        else{
        $config = Config::where('slug',$id)->first();
            
        }
  
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'config'=>$config],200);
    }

    /* them thuong hieu */
    public function store(Request $request){
        $config = new Config();
        $config->author= $request->author; //form
        $config->email = Str::of($request->name)->email('-');
        
        $config->phone = $request->phone; //form
        $config->zalo = $request->zalo; //form
        $config->facebook = $request->facebook; //form
        $config->address = $request->address;
        $config->metakey = $request->metakey; //form
        $config->metadesc = $request->metadesc; //form
        $config->created_at = date('Y-m-d H:i:s');
        $config->created_by = 1;
        $config->status = $request->status; //form

        $config->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'configs' => $config],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $config = Config::find($id);
        $config->author= $request->author; //form
        $config->email = Str::of($request->name)->email('-');
        
        $config->phone = $request->phone; //form
        $config->zalo = $request->zalo; //form
        $config->facebook = $request->facebook; //form
        $config->address = $request->address;
        $config->metakey = $request->metakey; //form
        $config->metadesc = $request->metadesc; //form
        $config->created_at = date('Y-m-d H:i:s');
        $config->created_by = 1;
        $config->status = $request->status; //form

        $config->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'configs' => $config],200);
    }

    /* xoa */
    public function destroy($id){
        $config = Config::find($id);
       if($config==null){
        return response()->json( ['message'=>'tai ko dc','success'=>false,'config'=>null],
            404
        );
       }

    
    $config->delete();
    return response()->json(['message'=>'tai dc','success'=>true,'id'=>$config],
        
    );
    }
}