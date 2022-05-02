<script>
  import { slotDigit, givaway } from "./stores.js";

  let selected;
  let digit = "";

  let showtext = "";
  let showMoney = "";
  let rng = 0;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function checkdigit() {
    rng = 0;
    for (let i = 0; i < $slotDigit.length; i++) {
      if (selected == $slotDigit[i].date) {
        if ($slotDigit[i].six == digit) {
          rng = $slotDigit[i].six.length;
        } else if ($slotDigit[i].five == digit) {
          rng = $slotDigit[i].five.length;
        } else if ($slotDigit[i].three == digit) {
          rng = $slotDigit[i].three.length;
        } else if ($slotDigit[i].twoTop == digit) {
          rng = $slotDigit[i].twoTop.length;
        } else if ($slotDigit[i].twoBot == digit) {
          rng = $slotDigit[i].twoBot.length;
        }

        break;
      }
    }
    explain(rng);
  }

  function explain(rng) {
    if (rng == 6) {
      showtext = $givaway.one[0];
      showMoney = $givaway.one[1];
    } else if (rng == 5) {
      showtext = $givaway.two[0];
      showMoney = $givaway.two[1];
    } else if (rng == 3) {
      showtext = $givaway.three[0];
      showMoney = $givaway.three[1];
    } else if (rng == 2) {
      showtext = $givaway.four[0];
      showMoney = $givaway.four[1];
    } else {
      showtext = "เสียใจด้วยคุณไม่ถูกรางวัล";
      showMoney = "";
    }
  }
</script>

<main>
  <h1>ตรวจหวย SoftLottery</h1>
  <h2>ขอให้โชคเข้าข้างคุณ</h2>
  <div id="chid">
    <input bind:value={digit} />
    <button disabled={!digit} on:click={checkdigit}> ตรวจหวย </button>
    <select bind:value={selected}>
      {#each $slotDigit as item}
        <option value={item.date}>
          {item.date.split("-")[2]}
          {months[parseInt(item.date.split("-")[1])]}
          {item.date.split("-")[0]}
        </option>
      {/each}
    </select>
  </div>
  <div>
    {#if showMoney}
      <div class="middle">
        <h2>ขอแสดงความยินดีคุณได้รับ {showtext}</h2>
        <h2>เงินที่ได้รับเท่ากับ {showMoney}</h2>
      </div>
    {:else}
      <h2>{showtext}</h2>
    {/if}
  </div>
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
  #chid {
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: space-between;
  }
  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
