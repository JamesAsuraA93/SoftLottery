<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Buy from "./Buy.svelte";
  import Check from "./Check.svelte";
  import Button from "./components/Button.svelte";
</script>

<Router>
  <nav>
    <div style="margin-left: 30px;">
      <h1 style="margin-top: 0px;">SoftLottery by Jaemsc.Jrcn</h1>
      <p style="margin-top: -20px; margin-bottom: 0px;">
        ธีรภัทร สุภาศรี 6410742198
      </p>
    </div>
    <div class="group" style="margin-right: 30px;">
      <Button path={"/"} name={"Home"} />
      <Button path={"/Buy"} name={"ซื้อ Lottery"} />
      <Button path={"/Check"} name={"ดูผล Lottery"} />
    </div>
  </nav>
  <main>
    <Route>
      <Home />
    </Route>
    <Route path="/Buy">
      <Buy />
    </Route>
    <Route path="/Check">
      <Check />
    </Route>
  </main>
</Router>

<style>
  nav {
    width: 100vw;
    min-width: 800px;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #80b3ff;
  }
  .group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
