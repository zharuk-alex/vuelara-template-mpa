<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes.head')
    </head> 
    <body class="">
        <app id="app">
            @if( !empty($aside) )
            <template v-slot:aside>
                <aside-drawer :initial-props="{{json_encode($aside)}}"></aside-drawer>
            </template>
            @endif
            @if( !empty($navbar) )
            <template v-slot:navbar>
                <navbar 
                    :initial-props="{{json_encode($navbar)}}"
                    :page-title="{{json_encode($title)}}"
                ></navbar>
            </template>
            @endif
            <template v-slot:content>
                @yield('content')
            </template>
            <template v-slot:footer>
                @include('includes.footer')
            </template>
        </app>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
