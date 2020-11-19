@extends('layout')

@section('content')
<students-page-content :initial-props="{{ json_encode($data) }}"></students-page-content>
@endsection