<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['title','parent_id','path', 'icon', 'isblocked', 'order'];

    public function children() {
        return $this->hasMany('App\Models\Menu','parent_id','id') ;
    }
}
