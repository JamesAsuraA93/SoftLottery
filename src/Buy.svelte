<script>
  import { storeBuy } from "./stores.js";

  let textdigit = "";
  let error = "";
  function Buy() {
    if (textdigit.length >= 2 && textdigit.length <= 6) {
      error = "";
      alert("Success");
      $storeBuy = textdigit;
    } else {
      error = "คุณใส่หลักของเลขผิด กรุณากรอกใหม่อีกครั้งค่ะ";
    }
  }
</script>

<main>
  <h1>ซื้อหวย SoftLottery</h1>
  <p>หมายเหตุ : สามารถซื้อเลขได้ตั้งแต่ 2 ถึง 6 หลักเท่านั้น</p>
  <div class="middle">
    <div id="clean">
      <input type="text" bind:value={textdigit} />
      <button on:click={Buy}>ซื้อ</button>
    </div>
  </div>
  <h3>{error}</h3>
</main>

<style>
  main {
    display: flex;
    width: full;
    height: 100vh;
    margin-top: -75px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .middle {
    display: flex;
    width: 800px;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  }
  #clean {
    display: flex;
    flex-direction: row;
  }
</style>
