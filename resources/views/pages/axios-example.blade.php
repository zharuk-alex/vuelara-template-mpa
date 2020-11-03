@extends('layout')

@section('content')
<axios-example-page-content :initial-props="{{ json_encode($data) }}"></axios-example-page-content>
@endsection