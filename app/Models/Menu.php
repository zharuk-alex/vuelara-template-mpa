<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['title','parent_id','path', 'icon', 'isblocked', 'order'];

    protected $appends = ['is_removable']; // custom attribute
    
    public function getIsRemovableAttribute() 
    {
        return $this->id > 6; // temporary / accessing for make item removable
    }

    public function children() 
    {
        return $this->hasMany('App\Models\Menu','parent_id','id')->orderBy('order') ;
    }
}
