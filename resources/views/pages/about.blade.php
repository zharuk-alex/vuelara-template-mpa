@extends('layout')

@section('content')
<about-page-content 
    :initial-props="{{ json_encode($data) }}" 
    ref="about-page"
></about-page-content>
@endsection