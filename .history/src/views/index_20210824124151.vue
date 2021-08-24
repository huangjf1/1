
<template>
  <div class="content">
    <van-nav-bar title="信息完善" left-arrow @click-left="onClickLeft">
      <template #left>
        <img class="backIcon" src="@/assets/image/back.png" alt="">
      </template>
    </van-nav-bar>
    <div class="tabs">
      <div :class="initIndex>=0?'currentTab':''"></div>
      <div :class="initIndex>=1?'currentTab':''"></div>
      <div :class="initIndex>=2?'currentTab':''"></div>
      <div :class="initIndex>=3?'currentTab':''"></div>
      <!-- <div :class="initIndex==4?'currentTab':''"></div> -->
    </div>
    <div class="my-swipe">
      <van-swipe ref="swipe"  indicator-color="transparent" :touchable="false">
        <!-- 是否有中文基础 -->
        <van-swipe-item class="pageFour">
          <div class="select-chines">
            <div class="message-info">欢迎来T-Lab!</div>
            <img class="avatar" src="@/assets/image/avatar.png">
            <p>宝贝是否有中文基础?</p>
            <div class="select-list-box">
              <div @click="selectChines!=0?selectChines=0:selectChines=null" class="select-list" :class="selectChines==0?'current-select-list':''">
                从没学过
              </div>
              <div @click="selectChines!=1?selectChines=1:selectChines=null" class="select-list" :class="selectChines==1?'current-select-list':''">
                <p>学过</p>
                <p>0-6个月</p>
              </div>
              <div @click="selectChines!=2?selectChines=2:selectChines=null" class="select-list" :class="selectChines==2?'current-select-list':''">
                <p>学过</p>
                <p>6-12个月</p>
              </div>
              <div @click="selectChines!=3?selectChines=3:selectChines=null" class="select-list" :class="selectChines==3?'current-select-list':''">
                <p>学过</p>
                <p>超过一年</p>
              </div>
            </div>
          </div>
          <div class="btn" @click="next(1)" v-show="selectChines!=null">
            <span>下一步</span>
            <img src="@/assets/image/next_green.png">
          </div>
          <div class="btn-gray" v-show="selectChines==null">
            <span>下一步</span>
            <img src="@/assets/image/next_gray.png">
          </div>
        </van-swipe-item>
        <!-- 学习中文的侧重点 -->
        <van-swipe-item class="pageFour">
          <div class="select-chines">
            <img class="avatar" src="@/assets/image/avatar.png">
            <p>宝贝学习中文的侧重点? (可多选)</p>
            <div class="select-list-box">
              <div class="select-list" @click="selectList(item, index)" :class="item.check==true?'current-select-list':''" v-for="(item, index) in list" :key="index">
                {{item.text}}
              </div>
            </div>
          </div>
          <div class="btn" @click="next(2)" v-show="list.some(item => item.check === true)">
            <span>下一步</span>
            <img src="@/assets/image/next_green.png">
          </div>
          <div class="btn-gray" v-show="!list.some(item => item.check === true)">
            <span>下一步</span>
            <img src="@/assets/image/next_gray.png">
          </div>
        </van-swipe-item>
        <!-- 选择出生年月 -->
        <van-swipe-item class="pageThree">
          <div class="select-age">
            <img class="avatar" src="@/assets/image/avatar.png">
            <p>宝贝哪年出生?</p>
            <van-field
              v-model="result"
              is-link
              readonly
              placeholder="请选择"
              @click="showPicker = true"
              arrow-direction='down'
              input-align='center'
              :border='false'
            />
            <div class="age-desc">我们会根据孩子不同的年龄推荐相应的体验课程</div>
            
          </div>
          <div class="btn" @click="next(3)" v-show="result">
            <span>下一步</span>
            <img src="@/assets/image/next_green.png">
          </div>
          <div class="btn-gray" v-show="!result">
            <span>下一步</span>
            <img src="@/assets/image/next_gray.png">
          </div>
        </van-swipe-item>
        <!-- 输入昵称 -->
        <van-swipe-item class="pageOne">
          <div class="pageOneDesc">
            <img class="avatar" src="@/assets/image/avatar.png">
            <div class="nameDesc">点击输入宝贝昵称</div>
            <input @input="changeText" v-model="name" type="text" placeholder="请输入">
            <div class="message" :class="firstShow?'messageColor':''">最多14个英文字符或7个汉字</div>
          </div>
          <div class="btn btn-success" v-show="!firstShow">
            <span>完成</span>
            <img src="@/assets/image/next_green.png">
          </div>
          <div class="btn-gray" v-show="firstShow">
            <span>完成</span>
            <img src="@/assets/image/next_gray.png">
          </div>
        </van-swipe-item>
        <!-- 选择性别 -->
        <!-- <van-swipe-item class="pageTwo">
          <div class="selectSex">
            <div class="man" @click="selectSex!=1?selectSex=1:selectSex=''">
              <img class="manImg" src="@/assets/image/man.png">
              <img class="checkImg" v-show="selectSex==1" src="@/assets/image/checked.png">
            </div>
            <div class="andText">或</div>
            <div class="woman" @click="selectSex!=2?selectSex=2:selectSex=''">
              <img class="womanImg" src="@/assets/image/woman.png">
              <img class="checkImg" v-show="selectSex==2" src="@/assets/image/checked.png">
            </div>
          </div>
          <div class="btn" @click="next(2)" v-show="selectSex!=''"></div>
          <div class="btn-gray" v-show="selectSex==''"></div>
        </van-swipe-item> -->
      </van-swipe>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        confirm-button-text="确定"
        confirm-color='red'
      />
    </van-popup>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  components: {
    
  },
  setup () {
    let initIndex = ref(0)
    let name = ref('')
    let selectChines = ref(null)
    let swipe = ref('')
    let firstShow = ref(true)
    let selectSex = ref('')
    let date = new Date()
    let year = date.getFullYear()
    console.log(year)
    const columns = []
    for (var i = 2000;i<=year;i++){
      columns.unshift({
        text: i
      })
    }
    // 侧重点列表
    const list = ref([
      { text: '拼音', check: false },
      { text: '听力', check: false },
      { text: '阅读', check: false },
      { text: '口语', check: false}
    ])
    const result = ref('');
    const showPicker = ref(false);
    const onConfirm = (value) => {
      result.value = value.text;
      showPicker.value = false;
    };
    // 返回
    const onClickLeft = () => {
      if (initIndex.value>0){
        swipe.value.prev()
        initIndex.value -= 1
      }
    }
    const selectList = (item) => {
      item.check = !item.check
    }
    const changeText = () => {
      /*eslint-disable*/
      let len = name.value.replace(/[^\x00-\xFF]/g,'**').length
      if (len<=14 && len>0) {
        firstShow.value = false
      } else {
        firstShow.value = true
      }
    }
    const next = (index) => {
      if (initIndex.value<4){
        swipe.value.next()
        initIndex.value = index
      }
    }
    onMounted (()=>{

    })
    return {
      initIndex,
      swipe,
      firstShow,
      columns,
      result,
      showPicker,
      list,
      selectChines,
      name,
      changeText,
      selectSex,
      onClickLeft,
      onConfirm,
      selectList,
      next
    }
  }
}
</script>
<style scoped lang="less">
 .content {
   width: 100%;
   height: 100%;
   margin: 0 auto;
   display: flex;
   overflow-y: auto;
   flex-direction: column;
   background: #f3f5f9;
   .backIcon {
     width: 24px;
     height: 24px;
   }
   .my-swipe {
      flex: 1;
      .van-swipe {
       height: 100%;
      }
      .van-swipe-item {
       color: #fff;
       font-size: 20px;
       text-align: center;
      }
      /deep/.van-swipe__indicators {
        display: none;
      }
      .pageOne {
        position: relative;
        display: flex;
        flex-direction: column;
        .pageOneDesc{
          flex: 1;
        }
        
        .nameDesc {
          text-align: center;
          color: #344356;
          font-size: 16px;
          font-weight: 600;
          font-family: PingFang HK;
          margin-top: 25px;
        }
        input {
          width: 335px;
          height: 16px;
          line-height: 16px;
          background: #FFFFFF;
          padding: 17px 0;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 16px;
          text-align: center;
          margin-top: 19px;
          color: #344356;
        }
        .message {
          color: #344356;
          font-size: 14px;
          margin-top: 10px;
          &.messageColor {
            color: #FF7044;
          }
        }
        
      }
      .pageTwo {
        position: relative;
        display: flex;
        flex-direction: column;
        .selectSex {
          width: 140px;
          height: 340px;
          margin: 100px auto 0;
          flex: 1;
          .man,.woman {
            width: 140px;
            height: 140px;
            background: #FFFFFF;
            position: relative;
            cursor: pointer;
            .manImg{
              width: 56px;
              height: 59px;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
            .womanImg {
              width: 62px;
              height: 58px;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
            .checkImg {
              width: 22px;
              height: 22px;
              position: absolute;
              right: 5px;
              top: 5px;
            }
          }
          .andText {
            height: 60px;
            line-height: 60px;
            color: #344356;
            text-align: center;
            font-size: 16px;
          }
        }
      }
      .pageThree {
        display: flex;
        flex-direction: column;
        .select-age {
          width: 335px;
          flex: 1;
          margin: 0 auto;
          >p{
            color: #344356;
            font-size: 20px;
            margin-top: 20px;
            font-family: PingFang HK;
            font-style: normal;
            font-weight: 500;
            margin-bottom: 25px;
          }
          .age-desc {
            color: #5a6776;
            font-family: PingFang HK;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            margin-top: 20px;
          }
          .van-field {
            border-radius: 5px;
          }
          /deep/ .van-popup--bottom {
            width: 375px;
            left: 0;
            right: 0;
            margin: auto;
            bottom: 0;
          }
          /deep/ .van-picker__toolbar {
            color: gray;
          }
          /deep/ .van-picker__confirm {
            color: #344356
          }
        }
      }
      .pageFour {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .select-chines {
          flex: 1;
          width: 100%;
          min-width: 375px;
          max-width: 670px;
          margin: 0 auto;
          position: relative;
          .message-info {
            width: 136px;
            height: 52px;
            position: absolute;
            background: url('~@/assets/image/Union.png') no-repeat;
            background-size: 100% 100%;
            left: 0;
            right: 0;
            margin: auto;
            top: 35px;
            font-family: PingFang HK;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            color: #344356;
          }
          >p {
            font-family: PingFang HK;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            color: #344356;
            margin-top: 20px;
          }
          .select-list-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .select-list {
            width: calc(50% - 20px);
            height: 60px;
            display: flex;
            margin:0 5px;
            flex-direction: column;
            align-items: center;
            background: white;
            font-family: PingFang HK;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            display: flex;
            justify-content: center;
            text-align: center;
            color: #344356;
            border-radius: 4px;
            margin-top: 20px;
            &.current-select-list {
              background: #088384;
              color: white;
            }
          }
        }
      }
      .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        box-shadow: 0px 12px 19px rgba(60, 128, 209, 0.0851449);
        margin-top: 70px;
      }
      .btn {
        width: 100%;
        min-width: 375px;
        max-width: 650px;
        height: 60px;
        line-height: 60px;
        background: #088384;
        background-size: 100% 100%;
        cursor: pointer;
        margin: 20px auto 20px;
        border-radius: 10px;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #FFFFFF;
        position: relative;
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
        }
      }
      .btn-success {
        background: url('../assets/image/success.png') no-repeat;
        background-size: 100% 100%;
      }
      .btn-gray {
        width: 100%;
        min-width: 375px;
        max-width: 650px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        background: #D4DCE7;
        margin: 20px auto 20px;
        border-radius: 10px;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #FFFFFF;
        position: relative;
        img {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          right: 20px;
        }
      }
   }
   .tabs {
     width: 100%;
     height: 4px;
     display: flex;
     justify-content: space-around;
     margin: 10px auto 0;
     div{
       height: 4px;
       flex: 1;
       background: #D4DCE7;
       border-radius: 26px;
       margin: 0 4px;
     }
     .currentTab {
       background: #00968E;
     }
   }
 }

</style>