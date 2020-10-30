<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes.head')
    </head> 
    <body class="">
        <app id="app">
            <template v-slot:aside>
                <left-aside-drawer :initial-props="{{json_encode($aside)}}"></left-aside-drawer>
            </template>
            <template v-slot:navbar>
                <navbar :initial-props="{{json_encode($navbar)}}"></navbar>
            </template>
            <template v-slot:content>
                @yield('content')
            </template>
            <template v-slot:footer>
                @include('includes.footer')
            </template>
        </app>
        <script src="{{ mix('js/app.js') }}" defer></script>
    </body>
</html>
