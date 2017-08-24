<template>
<div>
    <mu-appbar title="图集" class="Top-Class" titleClass="titleclass"></mu-appbar>
    <div class="seize-seat-bottom"></div>
    <mu-timeline lineColor="black" lineType="dashed">
    <mu-timeline-item iconColor="red" iconType="dotted">
        <mu-icon value="radio_button_checked" color="red" slot="icon"/>
         <span>发布1.0版本</span>
    </mu-timeline-item>
    <mu-timeline-item lineType="solid">
        <mu-icon value="cancel" color="red" slot="icon"/>
        <span>发布1.1版本</span>
    </mu-timeline-item>
    <mu-timeline-item>
      <span>发布1.2版本</span>
    </mu-timeline-item>
    <mu-timeline-item lineColor="#3476db">
      <mu-icon value="flight_takeoff" color="red" slot="icon"/>
      <span>发布2.0版本</span>
    </mu-timeline-item>
    <mu-timeline-item iconColor="blue">
      <span>发布2.1版本</span>
    </mu-timeline-item>
    <mu-timeline-item iconLine="5">
      <span>发布2.2版本</span>
    </mu-timeline-item>
  </mu-timeline>
</div>
</template>
<style scoped lang="less">
    .Top-Class{
        position:fixed;
        top: 0;
    }
    .titleclass{
        font-size: 1.2em;
        text-align: center;
    }
    .seize-seat-bottom{
        margin-top: 57px;
    }
    .mu-timeline-item{
        background-color: #fff;
    }
</style>