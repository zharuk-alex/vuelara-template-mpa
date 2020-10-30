@extends('layout')

@section('content')

<about-page-content :initial-props="{{ json_encode($data) }}"></about-page-content>
@endsection