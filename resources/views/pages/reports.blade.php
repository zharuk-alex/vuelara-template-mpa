@extends('layout')

@section('content')
<reports-page-content :initial-props="{{ json_encode($data) }}"></reports-page-content>
@endsection