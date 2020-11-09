@extends('layout')

@section('content')
<menu-tree-page-content 
   :initial-props="{{ json_encode($menus) }}" 
   home-route="{{ route('menus.store') }}"
></<menu-tree-page-content>
@endsection