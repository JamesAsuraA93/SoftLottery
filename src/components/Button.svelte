<script>
  import { Link } from "svelte-navigator";
  export let path, name;
</script>

<div style="margin-right: 10px;">
  <Link to={path}><button style="width: 100%;">{name}</button></Link>
</div>

<style>
  button:hover {
    background-color: #005ce6;
    color: aliceblue;
  }
  button {
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    border: none;
  }
</style>
