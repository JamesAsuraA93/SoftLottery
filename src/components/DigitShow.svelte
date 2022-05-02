<script>
  export let digit, name;
</script>

<div>
  <div class="mother">
    <h3 class="names">
      {name}
    </h3>
    <span>
      {digit}
    </span>
  </div>
</div>

<style>
  .mother {
    position: relative;
    border: 2px solid;
    border-radius: 10px;
    width: 170px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a75ff;
  }
  span {
    color: white;
    font-size: 30px;
    font-weight: 700;
  }
  .names {
    position: absolute;
    top: -35px;
    left: 10px;
  }
  h3 {
    background-image: linear-gradient(0deg, #1a75ff, aliceblue, aliceblue);
    border-radius: 5px;
    font-size: 18px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
