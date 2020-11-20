@extends('layout')

@section('content')
<about-page-content 
    :initial-props="{{ json_encode($data) }}" 
    ref="contentwarapper"
    full-size-container
></about-page-content>
@endsection