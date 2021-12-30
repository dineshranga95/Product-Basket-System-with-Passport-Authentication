<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\items;
use Carbon\Carbon;

class ItemController extends Controller
{
    public function SaveItems(Request $request){
      
        $items= new items();

        $expl=explode(',',$request->image);
        $decode=base64_decode($expl[1]);
        if(str_contains($expl[0] ,'png')){
            $exte='png';
        }else{
            $exte='jpg';
        }
        $currenttime = carbon::now()->timestamp;
        $filename = $currenttime.'.'.$exte;
        $filepath = public_path().'/'.$filename;
        file_put_contents($filepath,$decode);

        $items->name=$request->input('name');
        $items->price=$request->input('price');
        $items->quantity=$request->input('quantity');
        $items->image=$filename;
        $items->save();

        return response()->json(['msg'=>'Item Add to the List Successfully.', 'items'=>$items]);
    } public function getItems(){
        $getItems=items::all();
        return response()->json(['itemlist'=>$getItems]);
    }
    public function deleteItems($id){
        $Item=items::find($id);
        $Item->delete();
        return response()->json(['msg'=>'item is deleted']);
    }
    public function updateItems(Request $request, $id){
        $item=items::find($id);
        $item->name=$request->input('name');
        $item->price=$request->input('price');
        $item->quantity=$request->input('quantity');
        $item->save();
        return response()->json(['msg'=>'Item Updated Succefully','item'=>$item]);
    }
    public function getItemdetails($id){
        $getItem=items::find($id);
        return response()->json(['item'=>$getItem]);
    }
    
}