<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Menu;


class MenuController extends Controller
{

    public function index(Request $request){
        $menus = Menu::where('parent_id', '=', 0)->get();
        foreach ($menus as $key => $menu) 
        {
            $menu->children;
        }
        $data = array(
            "aside" => $this->aside($request),
            'menus'=> $menus,
        );
        return view('pages.menuTreeview', $data);
    }

    public function store(Request $request)
    {
        $request->validate([
           'title' => 'required',
           "path" => 'required'
        ]);

        dd('store');
        
        $input = $request->all();
        $input = $request->only('parent_id','title', 'path', 'icon', 'isblocked', 'order');
        $input['parent_id'] = empty($input['parent_id']) ? 0 : $input['parent_id'];
        Menu::create($input);
        return back()->with('success', 'Menu added successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id) 
    {
        $request->validate([
            'id' => 'required',
            'title' => 'required',
            'path' => 'required'
        ]);

        dd('update');
        
        $menu = $request->all();
        
        Menu::find($id)->update($menu);
        return redirect('menus')->with('message', 'Success', compact('menu'));
    }


    public function destroy(Request $request, $id)
    {
        dd(['destroy'=>$id]);
    }

    public function aside($request){
        $menus = Menu::where('parent_id', '=', 0)->get();
        foreach ($menus as $key => $menu) 
        {
            $menu->children;
            if($menu['path'] == $request->path())
            {
                $menu['active'] = true;
            }
        }
        return $menus;
    }
}
