<template >
  <div>
    <div v-for="item in clubs" :key="item" class="card">
      <img src="../../assets/bg1049a.png" alt />
      <div>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {data(){return{
    clubs: ["浦岛水坝汉化组","萌田薰子汉化组"]
     
    }}
  }

;
</script>

<style>
.card img {
  width: 100%;
}
.card {
  height: 270px;
  width: 260px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  display: inline-block;
  margin-left: 18px;
  vertical-align: top;
}
.card span {
  font-size: 20px;
  color: #bfbfbf;
  display: block;
  letter-spacing: 2px;
  padding: 30px 20px;
}
</style>