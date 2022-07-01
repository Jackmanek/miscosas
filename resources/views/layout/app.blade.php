<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('/assets/css/miscosas.css')}}?v=1.0">
    @yield('css')
    <title>{{ config('app.name') }}</title>
</head>
<body>
<div id="app-jas">
    @include('partes.header')
    <main>
        @yield('content')
    </main>
    @include('partes.footer')
</div>
    <script src="{{ asset('/assets/javascript/miscosas.js')}}"></script>
    <script src="https://apps.lanbide.euskadi.net/apps/OF_OFERTAS_ODE_JSON?jsonCallback=ofertasLanbide"></script>
    <script src="https://kit.fontawesome.com/8763b4eb38.js"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
</body>
</html>