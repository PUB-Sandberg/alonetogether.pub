<script>
  import { Router, Link, Route } from "svelte-routing";
  import Frame from "../components/Frame.svelte";
	import { fullScreen } from '../store.js'

</script>


<div class = '{$fullScreen ? "view-container fullwidth" : "view-container"}'>
  <Router location={location}>
    <Route path="canteen" component="{Frame}" name="canteen" url="https://saschakrischock.com/atomchat" />
    <Route path="library" name="library" component="{Frame}" />
    <Route path="cinema" component="{Frame}" name="cinema" url="https://player.castr.io/live_15ad11500aee11eb83771bba972d760e" />
    <Route path="information-desk" name="information-desk" component="{Frame}" />
    <Route path="radio-archive" name="radio-archive" component="{Frame}" />
    <Route path="guestbook" name="guestbook" component="{Frame}" />
    <Route path="pub-e-pub" component="{Frame}" name="pub-e-pub" />
    <Route path="community-guidelines" component="{Frame}" name="guidelines" />
    <Route path="/" name="home" component="{Frame}" />
  </Router>
</div>

<style lang="scss" global>
  @import "./style/global.scss";
  @import "./style/helpers.scss";

  .view-container {
    width: 66.6%;
    height: calc(100% - (#{$footerHeight} + #{$menuHeight}));
    display: flex;
    border: solid white 1px;
    border-right: 0;
    border-top: 0;
    border-bottom: 0;
    overflow-y: scroll;
    @include bp-xs {
      width: 0; 
      border: none;
    }
    &.fullwidth {
      width: calc(100% - 2rem);
    }
  }

</style>

