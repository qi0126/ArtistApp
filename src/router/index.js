import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import visitorApply from '@/pages/visitorApply/visitorApply'
import visitorDetail from '@/pages/visitorDetail/visitorDetail'
import CameraIdentificationResult from '@/pages/cameraIdentificationResult/cameraIdentificationResult'
import Series1 from '@/pages/series/series1'
import Series2 from '@/pages/series/series2'
import Series3 from '@/pages/series/series3'
import Series4 from '@/pages/series/series4'
//zzp
import SpeciesSearch from '@/pages/Main/FirstPage/SpeciesSearch/SpeciesSearch'
import scanOneScan from '@/pages/Main/FirstPage/ScanOneScan/scanOneScan'
import SpeciesResults from '@/pages/Main/FirstPage/SpeciesResults/speciesResults'
import FirstPage from '@/pages/Main/FirstPage/firstPage'
import Found from '@/pages/Main/found/found'
import Order from '@/pages/Main/order/order'
import Buy from '@/pages/Main/order/buy'
import Car from '@/pages/Main/order/car'
import CarEditDetail from '@/pages/Main/order/carEditDetail'
import Sell from '@/pages/Main/order/sell'
import Save from '@/pages/Main/order/save'
import Soldier from '@/pages/Main/order/soldier'
import My from '@/pages/Main/my/my'
import General from '@/pages/Main/my/general'
import Feedback from '@/pages/Main/my/feedback'
import InformAndVoice from '@/pages/Main/my/informAndVoice'
import QrcodeShare from '@/pages/Main/my/qrcodeShare'
import ShowArtist from '@/pages/Main/my/showArtist'
import ShowCompany from '@/pages/Main/my/showCompany'
import AddProductMessage from '@/pages/Main/my/addProductMessage'
import EditUserMessage from '@/pages/Main/my/editUserMessage'
import tuiguang from '@/pages/Main/FirstPage/tuiguang'
import SearchText from '@/pages/Main/FirstPage/searchText/searchText'
import PersonalData from '@/pages/personalData/personalData'
import ChangeName from '@/pages/changeName/changeName'
import ChangePassword from '@/pages/changePassword/changePassword'
import MyAddress from '@/pages/myAddress/myAddress'
import AddAddress from '@/pages/myAddress/addAddress'
import EditAddress from '@/pages/myAddress/editAddress'
import Screen from '@/pages/Main/found/screen'
import Video from '@/pages/Main/found/video'
import ContentText from '@/pages/Main/found/contentText'
import Guide from '@/pages/guide/guide'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/firstPage',
    name: 'FirstPage',
    component: FirstPage,
    children:[
      {
        path: 'speciesSearch',
        component: SpeciesSearch,
    
      },
      {
        path: 'scanOneScan',
        component: scanOneScan
      },
      {
        path: 'searchText',
        component: SearchText,
        children:[
          {
            path: 'speciesResults',
            component: SpeciesResults,
          },
           
        ]
      },
      {
        path: 'cameraIdentificationResult',
        component: CameraIdentificationResult
      },{
        path: 'series1',
        component: Series1
      }, {
        path: 'series2',
        component: Series2
      },
      // {
      //   path: 'feedback',
      //   component: Feedback
      // },

    ]
  },
  {
    path: '/found',
    name: 'Found',
    component: Found,
    children:[
      {
        path: 'screen',
        component: Screen
      },
      {
        path: 'video',
        component: Video
      },
      {
        path: 'contentText',
        component: ContentText 
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children:[
      {
        path: 'buy',
        name:'Buy',
        component: Buy
      },
      {
        path: 'carEditDetail',
        component: CarEditDetail
      },
      {
        path: 'car',
        name:'Car',
        component: Car,
        children:[
          {
            path: 'carEditDetail',
            component: CarEditDetail
          },
          
        ]
      },
      {
        path: 'sell',
        name:'Sell',
        component: Sell
      },
      {
        path: 'soldier',
        name:'Soldier',
        component: Soldier
      },
      {
        path: 'save',
        name:'Save',
        component: Save
      },
      
      

    ]
  },

  {
    path: '/my',
    name: 'My',
    component: My,
    children: [
      {
        path: 'personalData',
        component: PersonalData,
        children: [
          {
            path: 'changeName',
            component: ChangeName
          },
          {
            path: 'changePassword',
            component: ChangePassword
          },
          {
            path: 'myAddress',
            component: MyAddress,
            children: [
              {
                path: 'addAddress',
                component: AddAddress
              },
              {
                path: 'editAddress',
                component: EditAddress
              }
            ]
          }
        ]
      },
      {
        path: 'general',
        component: General,
        children: [
          {
            path: 'informAndVoice',
            component: InformAndVoice
          },

        ]
      },
      {
        path: 'qrcodeShare',
        component: QrcodeShare,
        children: [
          {
            path: 'addProductMessage',
            component: AddProductMessage
          }
        ]
      },
      {
        path: 'feedback',
        component: Feedback
      },
      {
        path: 'showArtist',
        component: ShowArtist
      },
      {
        path: 'showCompany',
        component: ShowCompany
      },

    ]
  },
  
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  },

  {
    path: '/visitorApply',
    component: visitorApply
  },
  {
    path: '/visitorDetail',
    component: visitorDetail
  }, {
    path: '/cameraIdentificationResult',
    component: CameraIdentificationResult
  }, {
    path: '/series1',
    component: Series1
  }, {
    path: '/series2',
    component: Series2
  }, {
    path: '/series3',
    component: Series3
  }, {
    path: '/series4',
    component: Series4
  },{
    path: '/guide',
    component: Guide
  }
  ]
})
