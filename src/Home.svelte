<script>
  import DigitShow from "./components/DigitShow.svelte";
  import { slotDigit } from "./stores.js";
  let time = new Date();
  let day, month, year;
  day = time.getDate();
  month = time.getMonth();
  year = time.getFullYear();
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
</script>

<main>
  <h1>ยินดีต้อนรับเข้าสู่ SoftLottery</h1>
  <h2>วันนี้วันที่ {day} เดือน {month} ปี {year + 543}</h2>
  <div class="group">
    <div class="left">
      <h1>
        หวยวันที่ {parseInt(
          $slotDigit[$slotDigit.length - 1].date.split("-")[2]
        )}
        {months[parseInt($slotDigit[$slotDigit.length - 1].date.split("-")[1])]}
        {$slotDigit[$slotDigit.length - 1].date.split("-")[0]}
      </h1>
      <div class="middle">
        <DigitShow
          name={"รางวัลที่หนึ่ง"}
          digit={$slotDigit[$slotDigit.length - 1].six}
        />
      </div>
      <div class="middle">
        <DigitShow
          name={"รางวัลที่สอง"}
          digit={$slotDigit[$slotDigit.length - 1].five}
        />
        <DigitShow
          name={"รางวัลสามตัวตรง"}
          digit={$slotDigit[$slotDigit.length - 1].three}
        />
      </div>
      <div class="middle">
        <DigitShow
          name={"รางวัลสองตัวบน"}
          digit={$slotDigit[$slotDigit.length - 1].twoTop}
        />
        <DigitShow
          name={"รางวัลสองตัวล่าง"}
          digit={$slotDigit[$slotDigit.length - 1].twoBot}
        />
      </div>
    </div>
    <div class="right">
      <h1>สถิติหวย</h1>
      <table>
        <tr>
          <th> วันที่ </th>
          <th> 6 ตัว </th>
          <th> 5 ตัว </th>
          <th> 3 ตัว </th>
          <th> 2 ตัวบน </th>
          <th> 2 ตัวล่าง </th>
        </tr>
        <tbody>
          {#each $slotDigit as { date, six, five, three, twoTop, twoBot }, index}
            <tr>
              <td>{date}</td>
              <td>{six}</td>
              <td>{five}</td>
              <td>{three}</td>
              <td>{twoTop}</td>
              <td>{twoBot}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .group {
    display: flex;
    height: auto;
    width: 900px;
    justify-content: space-between;
  }

  .left {
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .middle {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
  }
  td {
    text-align: center;
  }
  table {
    border-collapse: collapse;
  }
  th {
    background-color: #003d99;
    color: ghostwhite;
  }
  table,
  th,
  td {
    border: 1px solid #000;
  }
  th {
    padding: 3px;
  }
  td {
    padding: 5px;
  }
</style>
