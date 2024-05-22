<script>
    export let src;
    import 'vidstack/player/styles/default/theme.css';
    import 'vidstack/player/styles/default/layouts/video.css';

    import 'vidstack/player';
    import 'vidstack/player/layouts';
    import 'vidstack/player/ui';
</script>

<media-player autoplay="true" title="Promovideo" {src}>
    <media-provider></media-provider>
    <media-video-layout></media-video-layout>
</media-player>