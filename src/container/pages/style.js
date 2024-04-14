import Styled from 'styled-components';

const LinkDiv = Styled.div``;
const PricingCard = Styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #9299B830;
  padding: 30px;
  .pricing-badge{
    height: 32px;
    padding: 6px 22.6px;
  }
  .price-amount{
    font-size: 36px;
    margin-bottom: 10px;
    .currency{
      font-size: 16px;
      font-weight: 600;
      top: -12px;
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 2px;
      color: ${({ theme }) => theme['extra-light-color']};
    }
    .pricing-validity{
      font-size: 13px;
      font-weight: 400;
      bottom: 0;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -2px;
      color: ${({ theme }) => theme['light-color']};
    }
  }
  .package-user-type{
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-color']};
  }
  .pricing-title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  button{
    padding: 0px 29.32px;
    height: 44px;
    border-radius: 6px;
    &.ant-btn-white{
      border: 1px solid #E3E6EF;
      span{
        color: #272b41;
      }
    }
  }
`;

const ListGroup = Styled.div`
  margin: 28px 0 15px;
  min-height: 210px;
  .list-single{
    display: flex;
    align-items: center;
    &:not(:last-child){
      margin-bottom: 12px;
    }
    .icon{
      display: inline-block;
      margin: ${({ theme }) => (theme.rtl ? '0px 0 -4px 10px' : '0px 10px -4px 0')};
    }
  }
`;

const Badge = Styled.span`
  display: inline-block;
  margin-bottom: 32px;
  padding: 5px 20px;
  border-radius: 16px;
  background: ${({ type, theme }) => theme[`${type}-color`]}10;
  color: ${({ type, theme }) => theme[`${type}-color`]};
  font-size: 13px;
  font-weight: 500;
`;

const GalleryNav = Styled.nav`
  background: #fff;
  margin-bottom: 25px;
  border-radius: 10px;
  padding: 0px 16px;
  @media only screen and (max-width: 767px){
    padding: 0 12px;
  }
  @media only screen and (max-width: 575px){
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
      a {
        position: relative;
        display: block;
        padding: 15px 0;
        margin: 0 12px;
        color: ${({ theme }) => theme['light-color']};
        @media only screen and (max-width: 767px){
          margin: 0 10px;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          background: ${({ theme }) => theme['primary-color']};
          content: "";
        }
        &.active{
          color: ${({ theme }) => theme['primary-color']};
          &:after{
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
`;

const GalleryCard = Styled.nav`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}03;
  figure{
    margin-bottom: 0;
  }
  .gallery-single-content{
    padding: 18px 25px 20px;
    .gallery-single-title{
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
    }
    p{
      font-size: 13px;
      margin-bottom: 0px;
      color: ${({ theme }) => theme['light-color']};
    }
  }
`;

const UsercardWrapper = Styled.nav`
  .user-card-pagination{
    margin: 15px 0 40px 0;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    @media only screen and (max-width: 991px){
      text-align: center;
    }
  }
`;

const UserTableStyleWrapper = Styled.nav`
  table{
    tbody{
      td{
        .user-info{
          .user-name{
            font-size: 14px;
          }
        }
        span.status-text{
          font-size: 12px;
          padding: 0 12.41px;
          line-height: 1.9;
          font-weight: 500;
          border-radius: 12px;
          text-transform: capitalize;
          display: inline-block !important;
          background: #ddd;
          &.active{
            background-color: ${({ theme }) => theme['success-color']}15;
            color: ${({ theme }) => theme['success-color']};
          }
          &.deactivate{
            background-color: ${({ theme }) => theme['warning-color']}15;
            color: ${({ theme }) => theme['warning-color']};
          }
          &.blocked{
            background-color: ${({ theme }) => theme['danger-color']}15;
            color: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
  .ant-table-pagination.ant-pagination{
    width: 100%;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    border-top: 1px solid ${({ theme }) => theme['border-color-light']};
    margin-top: 0 !important;
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      text-align: center;
    }
  }
  .contact-table{
    table{
      tr{
        th{
          &:first-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          }
          &:last-child{
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
          }
        }
      }
      .table-actions{
        button{
          width: auto;
          height: auto;
          padding: 0;
          background-color: transparent;
          &:hover{
            background-color: transparent;
          }
          &.ant-btn-primary{
            &:hover{
              color: #ADB4D2;
            }
          }
        }
      }
      tbody >tr.ant-table-row-selected >td{
        background-color: ${({ theme }) => theme['primary-color']}10;
      }
    }
  }
`;

const UserCard = Styled.div`
  text-align: center;
  .user-card{
    &.theme-list{
      .ant-card-body{
        padding: 30px 25px 30px 30px !important;
        @media only screen and (max-width: 479px){
          padding: 25px 20px 25px 20px !important;
        }
      }
      figure{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media only screen and (max-width: 479px){
          flex-flow: column;
        }
        img{
          max-width: 80px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:20px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:0px;
          }
        }
      }
      figcaption{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        @media only screen and (max-width: 379px){
          flex-flow: column;
        }
      }
      .card__content{
        p{
          max-width: 400px;
          font-size: 15px;
          color: ${({ theme }) => theme['gray-color']};
        }
        .card__designation{
            font-size: 13px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme['light-color']};
        }
        .card-text{
          margin-bottom: 12px;
        }
        .card-info{
          margin-bottom: 0;
          .user-meta{
            font-size: 14px;
            strong{
              font-weight: 600;
              color: ${({ theme }) => theme['dark-color']};
            }
          }
          .user-meta + .user-meta{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
          }
        }
      }
      .card__actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')}
        @media only screen and (max-width: 379px){
          margin-top: 15px;
        }
        button{
          padding: 0px 19.05px;
          min-width: 114px;
        }
      }
    }
    &.theme-grid-2{
      .ant-card-body{
        padding: 0 !important;
      }
      figure{
        position: relative;
      }
      .user-card__img{
        margin-bottom: 0;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: #fff;
        z-index: 22;
        img{
          position: relative;
          top: 6px;
        }
      }
      .user-card__bg{
        background-size: cover !important;
        background-position: center !important;
        border-radius: 10px 10px 0 0;
      }
      .card__bottom{
        position: relative;
        background-color: #fff;
        top: -26px;
        padding-top: 102px;
        border-radius: 30px 30px 10px 10px;
      }
    }
    &.theme-grid-3{
      .ant-card{
        text-align: left;
      }
      .ant-card-body{
        padding: 0 !important;
      }
      .card__top,
      .card__content,
      .card__info{
        padding: 0 30px;
      }
      .card__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        margin-bottom: 10px;
        .user-card__img{
          margin-right: 12px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
          img{
            max-width: 70px;
          }
        }
        .user-card__info{
          width: 100%;
          position: relative;
          .action-more{
            position: absolute;
            right: 0;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            top: 0;
            color: #ADB4D2;
          }
          .card__designation{
            margin-bottom: 0;
          }
        }
      }
      .card__content{
        p{
          font-size: 15px;
          margin-bottom: 26px;
        }
        .image-group{
          margin: -3px;
        }
        img{
          max-width: 34px;
          margin: 3px;
        }
      }
      .card__info{
        padding-bottom: 30px;
        padding-top: 18px;
        .ant-progress-inner{
          position: relative !important;
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme['light-color']};
        }
        h2{
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
          margin-bottom: 16px;
        }
        .info-line{
          display: flex;
          justify-content: space-between;
          .success{
            color: ${({ theme }) => theme['success-color']};
            background-color: transparent;
          }
        }
        .completed-count{
          margin-top: 4px;
        }
        .project-progress{
          display: flex;
          justify-content: space-between;
          .progress-percentage{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            span{
              font-size: 12px;
              color: ${({ theme }) => theme['gray-color']};
            }
          }
        }
      }
    }
  }
  .card{
    position: relative;
    box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}03;
    .ant-card-body{
      padding: 30px !important;
      div{
        position: static;
      }
    }
    figure{
      margin-bottom: 0;
      img{
        margin-bottom: 20px;
        width: 100%;
        border-radius: 50%;
        max-width: 150px;
      }      
    }
    .card__more_actions{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
      top: 20px;
      line-height: .5;
      padding: 5px 3px;
      color: ${({ theme }) => theme['extra-light-color']};
      box-shadow: 0 10px 20px #9299B815;
      svg,
      img{
        width: 20px;
      }
    }
    .card__name{
      font-size: 16px;
      margin-bottom: 6px;
      font-weight: 500;
      a{
        color: ${({ theme }) => theme['dark-color']};
        &:hover{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .card__designation{
      font-size: 13px;
      margin-bottom: 25px;
      color: ${({ theme }) => theme['light-color']};
    }
    .card__social{
      margin-top: 16px;
      a{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px ${({ theme }) => theme['light-color']}15;
        background: #fff;
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
        &.facebook span.fa{
          color: #3B5998;
        }
        &.twitter span.fa{
          color: #1DA1F2;
        }
        &.dribble span.fa{
          color: #C2185B;
        }
        &.instagram span.fa{
          color: #FF0300;
        }
      }
    }
  }

  .user-card{
    .ant-card-body{
      padding: 30px 25px 18px 25px !important;
      @media only screen and (max-width: 1599px){
        padding: 20px  20px 20px !important;
      }
      @media only screen and (max-width: 767px){
        padding: 15px  15px 15px !important;
      }
    }
    figure{
      img{
        margin-bottom: 18px;
        max-width: 120px;
      }      
    }
    .card__actions{
      margin: -5px;
      .ant-btn-white{
        color: ${({ theme }) => theme['gray-color']};
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        &:hover{
          border: 1px solid ${({ theme }) => theme['primary-color']};
        }
      }
      button{
        font-size: 13px;
        padding: 0px 22.7px;
        height: 38px;
        border-radius: 6px;
        box-shadow: 0px 3px 5px ${({ theme }) => theme['light-color']}05;
        margin: 5px;
        &:hover{
          color: #fff !important;
          background-color: ${({ theme }) => theme['primary-color']} !important;
          svg,
          i{
            color: #fff;
          }
        }
        svg,
        i{
          color: ${({ theme }) => theme['light-color']};
        }
      }
    }
    .card__info{
      padding-top: 20px;
      margin-top: 18px;
      border-top: 1px solid ${({ theme }) => theme['border-color-light']};
      .info-single{
        text-align: center;
      }
      .info-single__title{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 4px;
      }
      p{
        margin-bottom: 0;
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }
`;

const FaqCategoryBox = Styled.div`
  .faq-badge{
    font-weight: 400;
    color: ${({ theme }) => theme['light-color']};
    background: ${({ theme }) => theme['bg-color-light']};
  }
  ul{
    li{
      a{
        width: 100%;
        display: inline-block;
        font-weight: 500;
        position: relative;
        padding: ${({ theme }) => (!theme.rtl ? '12px 0 12px 20px' : '12px 20px 12px 0')};
        transition: all .3s ease;
        color: ${({ theme }) => theme['gray-color']};
        background-color: #fff;
        &.active{
          padding-left: 28px;
          &:before{
            opacity: 1;
            visibility: visible;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -15px;
          }
          &:after{
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 5px;
          }
          &.primary{
            &:after{
              background: ${({ theme }) => theme['primary-color']};
            }
          }
          &.secondary{
            &:after{
              background: ${({ theme }) => theme['secondary-color']};
            }
          }
          &.success{
            &:after{
              background: ${({ theme }) => theme['success-color']};
            }
          }
          &.warning{
            &:after{
              background: ${({ theme }) => theme['warning-color']};
            }
          }
          &.info{
            &:after{
              background: ${({ theme }) => theme['info-color']};
            }
          }
          &.danger{
            &:after{
              background: ${({ theme }) => theme['danger-color']}5;
            }
          }
        }
        &:before{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -25px;
          top: 0;
          height: 100%;
          width: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          content: '';
          background: ${({ theme }) => theme['primary-color']};
          transition: all .3s ease;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          top: 50%;
          transform: translatey(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          content: '';
          background: ${({ theme }) => theme['primary-color']}50;
          transition: all .3s ease;
        }
        &.secondary{
          &:after{
            background: ${({ theme }) => theme['secondary-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['secondary-color']};
          }
        }
        &.success{
          &:after{
            background: ${({ theme }) => theme['success-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['success-color']};
          }
        }
        &.warning{
          &:after{
            background: ${({ theme }) => theme['warning-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['warning-color']};
          }
        }
        &.info{
          &:after{
            background: ${({ theme }) => theme['info-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['info-color']};
          }
        }
        &.danger{
          &:after{
            background: ${({ theme }) => theme['danger-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
`;

const FaqSupportBox = Styled.div`
  text-align: center;
  .ant-card-body{
    padding: 30px 50px 40px 50px !important;
    @media only screen and (max-width: 1599px){
      padding: 30px !important;
    }
    @media only screen and (max-width: 991px){
      padding: 25px !important;
    }
  }
  figure{
    margin-bottom: 30px;
    img{
      width: 100%;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${({ theme }) => theme['dark-color']};
  }
  button{
    padding: 0 30px;
    border-radius: 6px;
    height: 44px;
  }
`;

const FaqWrapper = Styled.div`
  .ant-card{
    .ant-card-body{
      h1{
        font-weight: 500;
      }
    }
  }
  .ant-collapse{
    margin-top: 25px;
    &.ant-collapse-borderless{
      background: #fff;
    }
    &.ant-collapse-icon-position-left{
      .ant-collapse-header{
        color: ${({ theme }) => theme['dark-color']} !important;
      }
    }
  }
  .ant-collapse-item{
    border: 1px solid ${({ theme }) => theme['border-color-light']} !important;
    &.ant-collapse-item-active{
      box-shadow: 0px 15px 40px ${({ theme }) => theme['light-color']}15;
    }
    .ant-collapse-header{
      font-weight: 500;
      font-size: 15px;
      background-color: #fff;
      padding: 18px 25px !important;
      border-radius: 5px !important;
      @media only screen and (max-width: 575px){        
        padding: ${({ theme }) => (!theme.rtl ? '15px 45px 15px 15px' : '15px 15px 15px 45px')} !important;
      }
      .ant-collapse-arrow{
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: auto !important;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 25px !important;
        top: 22px !important;
        transform: translateY(0) !important;
      }
    }
  }

  .ant-collapse-content{
    box-shadow: 0 15px 40px ${({ theme }) => theme['light-color']}15;
    .ant-collapse-content-box{
      border-top: 1px solid ${({ theme }) => theme['border-color-light']} !important;
      padding: 20px 25px 30px !important;
      P{
        font-size: 15px;
        margin-bottom: 35px;
        line-height: 1.667;
        color: ${({ theme }) => theme['gray-color']};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: ${({ theme }) => theme['dark-color']};
      }
      .panel-actions{
        button{
          height: 36px;
          padding: 0 15px;
          &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }
`;

const SearchResultWrapper = Styled.div`
  .ant-select{
    @media only screen and (max-width: 575px){
      width: 100% !important;
    }
  }
  .ant-select-selector{
    height: 48px !important;
    .ant-select-selection-search{
      height: 48px;
      width: 100% !important;
      input{
        height: 46px !important;
      }
    }
    .ant-input-affix-wrapper{
      border: 0 none;
    }
    .ant-select-selection-search-input {
      border-radius: 100px;
    }
  }
  .search-filter-menu{
    margin: 22px 0 20px;
    @media only screen and (max-width: 575px){
      text-align: center;
    }
    ul{
      li{
        display: inline-block;
        margin-bottom: 10px;
        &:not(:last-child){
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        }
        a{
          font-size: 13px;
          font-weight: 500;
          display: block;
          padding: 5px 15px;
          border-radius: 5px;
          color: ${({ theme }) => theme['light-color']};
          box-shadow: 0 3px 6px ${({ theme }) => theme['light-color']}05;
          background: #fff;
          &.active{
            color: #fff;
            background: ${({ theme }) => theme['primary-color']};
          }
        }
      }
    }
  }
`;

const ResultList = Styled.div`
  .result-list-top{
    max-width: 1000px;
    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
    margin-bottom: 20px;
    padding-bottom: 24px;
  }
  .search-found-text{
    font-size: 16px;
    margin-bottom: 0;
    color: ${({ theme }) => theme['light-color']};
    .result-count{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
    }
    .result-keyword{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
    }
    .result-count,
    .result-keyword{
      font-weight: 600;
      color: ${({ theme }) => theme['dark-color']};
    }
  }
  .result-limit{
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    margin-bottom: 0;
    color: ${({ theme }) => theme['light-color']};
    @media only screen and (max-width: 767px){
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
      margin-top: 10px;
    }
  }
  .result-list-content{
    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
    padding-bottom: 14px;
    margin-bottom: 30px;
    ul{
      li{
        &:not(:last-child){
          margin-bottom: 35px;
        }
        .result-list-title{
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          .search-keyword{
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
          }
        }
        p{
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
  }
  .ant-pagination{
    @media only screen and (max-width: 575px){
      text-align: center;
    }
  }
`;

const MaintananceWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  img{
    margin-bottom: 72px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 30px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p{
    color: ${({ theme }) => theme['gray-color']};
  }
`;

const ErrorWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  img{
    margin-bottom: 100px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 30px;
    }
  }
  .error-text{
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 35px;
    color: ${({ theme }) => theme['extra-light-color']};
  }
  p{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 26px;
  }
  button{
    height: 44px;
  }
`;

const ComingsoonStyleWrapper = Styled.div`
  text-align: center;
  background: #fff;
  padding: 75px 0 30px;
  margin-bottom: 30px;
  @media only screen and (max-width: 1150px){
    padding: 50px 0 6px;
  }
  @media only screen and (max-width: 991px){
    padding: 20px 0 0px;
  }
  .strikingDash-logo{
    margin-bottom: 55px;
    @media only screen and (max-width: 1150px){
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 767px){
      margin-bottom: 25px;
    }
    img{
      max-width: 170px;
    }
  }
  .coming-soon-content{
    h1{
      font-size: 58px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 25px;
      color: ${({ theme }) => theme['dark-color']};
      @media only screen and (max-width: 991px){
        font-size: 48px;
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 767px){
        font-size: 40px;
        line-height: 1.45;
      }
      @media only screen and (max-width: 479px){
        font-size: 30px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    p{
      font-size: 17px;
      max-width: 580px;
      margin: 0 auto 25px;
      color: ${({ theme }) => theme['gray-color']};
      @media only screen and (max-width: 991px){
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 767px){
        font-size: 16px;
      }
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .countdwon-data{
    display: flex;
    justify-content: center;
    >span{
      &:not(:last-child){
        margin-right: 50px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 50px;
        @media only screen and (max-width: 575px){
          margin-right: 20px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        }
      }
    }
  }
  .strikingDash-countdown{
    .countdown-time{
      font-size: 42px;
      font-weight: 600;
      line-height: 1.45;
      color: ${({ theme }) => theme['dark-color']};
      @media only screen and (max-width: 991px){
        font-size: 32px;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    .countdown-title{
      font-size: 16px;
      font-weight: 400;
      display: block;
      color: ${({ theme }) => theme['gray-color']};
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .subscription-form{
    margin-top: 40px;
    @media only screen and (max-width: 991px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 1150px){
      margin-top: 35px;
    }
    .subscription-form-inner{
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 375px){
        flex-flow: column;
        margin-bottom: 20px;
      }
      .ant-form-item-control-input{
        margin-right: 20px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        @media only screen and (max-width: 375px){
          margin-right: 0;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-input{
          min-width: 320px;
          padding: 12px 20px;
          @media only screen and (max-width: 767px){
            min-width: 100%;
          }
          &::placeholder{
            color: ${({ theme }) => theme['extra-light-color']};
          }
        }
      }
      button{
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
  .coming-soon-social{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 767px){
      margin-top: 30px;
    }
    ul{
      margin-bottom: 30px;
      li{
        display: inline-block;
        &:not(:last-child){
          margin-right: 15px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          i,
          span,
          svg{
            color: #fff;
          }
          &.facebook{
            background-color: #3B5998;
          }
          &.twitter{
            background-color: #1DA1F2;
          }
          &.globe{
            background-color: #DD3E7C;
          }
          &.github{
            background-color: #23282D;
          }
        }
      }
    }
    p{
      font-size: 14px;
      color: ${({ theme }) => theme['light-color']};
    }
  }
`;

const AddUser = Styled.div`
  .form-title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  .add-user-wrap{
   $: 
  }
  .add-user-bottom{
    margin-top: 20px;
    button + button{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
    .ant-btn-light{
      background: ${({ theme }) => theme['bg-color-light']};
      border: 1px solid #F1F2F6;
    }
    &.text-right{
      @media only screen and (max-width: 767px){
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')} !important;
      }
    }
  }
  .card-nav{
    ul{
      flex-wrap: wrap;
      margin-bottom: -4px -10px;
      @media only screen and (max-width: 575px){
        justify-content: center;
      }
      li{
        margin: 4px 10px !important;
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 26px;
          @media only screen and (max-width: 575px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          }
        }
        a{
          position: relative;
          padding: 22px 0;
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme['gray-color']};
          @media only screen and (max-width: 575px){
            padding: 0;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background-color: ${({ theme }) => theme['primary-color']};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          &.active{
            color: ${({ theme }) => theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
            svg,
            img,
            i,
            span{
              color: ${({ theme }) => theme['primary-color']};
            }
          }
          svg,
          img,
          i,
          span{
            color: ${({ theme }) => theme['light-color']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }

  /* // Photo Upload */
  .photo-upload{
    position: relative;
    max-width: 260px;
    margin-bottom: 30px;
    .ant-upload-select{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 85px;
      bottom: 5px;
      z-index: 10;
      background-color: ${({ theme }) => theme['white-color']};
      span{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        z-index: -1;
        background-color: ${({ theme }) => theme['primary-color']};
      }
      svg,
      i,
      span{
        color: ${({ theme }) => theme['white-color']};
      }
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    img{
      border-radius: 50%;
    }
    .info{
      background-color: transparent;
    }
    figcaption{
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      .info{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }

  .user-work-form{
    .ant-picker{
      padding: 0 15px 0 0;
    }
  }
  .user-info-form{
    .ant-select-single .ant-select-selector .ant-select-selection-item{
      color: ${({ theme }) => theme['gray-color']};
    }
  }
  .social-form{
    .ant-form-item-control-input-content{
      .ant-input-prefix{
        width: 44px;
        height: 44px;
        border-radius: 4px;
      }
    }
    .ant-form-item-control-input{
      height: 44px;
      .ant-input-affix-wrapper{
        &:hover,
        &:focus,
        &.ant-input-affix-wrapper-focused{
          border-color: #E3E6EF;
        }
        .ant-input{
          height: 42px;
          ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
      }
    }
    .ant-input-prefix{
      position: relative;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -11px;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme['primary-color']};
        i,
        svg,
        span.fa{
          color: #fff;
          font-size: 16px;
        }
        .fa-facebook{
          background-color: #3B5998;
        }
        .fa-twitter{
          background-color: #38B8FF;
        }
        .fa-linkedin{
          background-color: #2CAAE1;
        }
        .fa-instagram{
          background-color: #FF0300;
        }
        .fa-github{
          background-color: #292929;
        }
        .fa-youtube{
          background-color: #FE0909;
        }
      }
    }
  }
`;
const ChangelogWrapper = Styled.div`
   .ant-card-head{
     .ant-card-head-title{
       .v-num{
        $: 0;
         font-size: 18px;
         color: ${({ theme }) => theme['dark-color']};
       }
       .sign{
         font-size: 18px;
         color: ${({ theme }) => theme['dark-color']};
         display: inline-block;
         margin: 0 8px;
       }
       .rl-date{
        $: 0;
         font-weight: 400;
         font-size: 16px;
       }
     }
   }
  .version-list{
    .version-list__single{
      &:not(:last-child){
        margin-bottom: 30px;
      }
      ul{
        li{
          position: relative;
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          font-size: 16px;
          color: ${({ theme }) => theme['gray-color']};
          &:not(:last-child){
            margin-bottom: 12px;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            content: "";
          }
        }
        &.version-primary{
          li{
            &:after{
              background-color: ${({ theme }) => theme['primary-color']};
            }
          }
        }
        &.version-success{
          li{
            &:after{
              background-color: ${({ theme }) => theme['success-color']};
            }
          }
        }
        &.version-info{
          li{
            &:after{
              background-color: ${({ theme }) => theme['info-color']};
            }
          }
        }
      }
    }
    .version-list__top{
      .badge{
        font-size: 12px;
        line-height: 1.2;
        letter-spacing: 1.4px;
        font-weight: 500;
        display: inline-block;
        padding: 5px 8px;
        height: auto;
        border-radius: 4px;
        margin-bottom: 14px;
        color: #fff;
        &.badge-primary{
          background-color: ${({ theme }) => theme['primary-color']};
        }
        &.badge-info{
          background-color: ${({ theme }) => theme['info-color']};
        }
        &.badge-success{
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
  }

  .changelog-accordion{
    margin-top: 30px;
    .ant-collapse{
      background-color: transparent;
      border: 0 none;
    }
    .ant-collapse-item{
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme['border-color-normal']};
      &:not(:last-child){
        margin-bottom: 20px;
      }
      &:last-child{
        border-radius: 6px;
        .ant-collapse-header{
          border-radius: 6px;
        }
      }
    }
    .ant-collapse-header{
      border-radius: 6px;
      padding: 20px 30px 18px 30px !important;
      @media only screen and (max-width: 575px){
        padding: 16px 20px 14px 20px !important;
      }
      .ant-collapse-arrow{
        left: auto !important;
        right: 30px;
        svg,
        img{
          width: 14px;
        }
      }
      .v-num{
        font-size: 18px;
        font-weight: 500;
        color: ${({ theme }) => theme['dark-color']};
        @media only screen and (max-width: 575px){
          font-size: 16px;
        }
      }
      .rl-date{
        font-size: 16px;
        font-weight: 400;
        @media only screen and (max-width: 575px){
          font-size: 14px;
        }
      }
    }
    .ant-collapse-content{
      border-radius: 0 0 6px 6px;
      > .ant-collapse-content-box{
        padding: 30px 30px 25px;
      }
    }
  }
`;
const VersionHistoryList = Styled.div`
  .history-title{
    font-size: 11px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme['light-gray-color']};
  }
  .v-history-list{
    li{
      display: flex;
      justify-content: space-between;
      &:not(:last-child){
        margin-bottom: 24px;
      }
      .version-name{
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme['dark-color']};
      }
      .version-date{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
      }
    }
  }
`;

const TestimonialWrapper = Styled.div`
  position: relative;
  padding: 0 150px;
  .button-group {
      width: 100%;   
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 0;
  }
`;

const TestimonialStyleWrapper = Styled.div`
  .ant-card{
    direction: ltr;
  }
  .ant-card-body{
    padding: 0 !important;
  }
  .testimonial-block{
    .swiper-button-prev,
    .swiper-button-next{
      width: 44px;
      height: 44px;
      border-radius: 50%;
      box-shadow: 0 3px 10px ${({ theme }) => theme['dark-color']}16;
      @media only screen and (max-width: 991px){
        width: 35px;
        height: 35px;
      }
      &:after{
        line-height: 0;
      }
    }
    .testimonial-title{
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 50px;
      color: ${({ theme }) => theme['dark-color']};
      @media only screen and (max-width: 991px){
        font-size: 24px;
      }
    }
    &.theme-1{
      padding: 60px 100px 75px 100px;
      @media only screen and (max-width: 1599px){
        padding: 60px 50px 75px 50px;
      }
      @media only screen and (max-width: 1399px){
        padding: 50px 25px 45px 25px;
      }
      .testimonial-title{
        margin-bottom: 0;
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-80%);
        z-index: 22;
        background-color: #fff;
      }
      .swiper-button-prev{
        left: 10px;
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-left.svg').default}');
        }
      }
      .swiper-button-next{
        right: 10px;
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-right.svg').default}');
        }
      }
      .swiper-pagination{
        .swiper-pagination-bullet{
          width: 10px;
          height: 10px;
          background-color: #DCDDFA;
          opacity: 1;
          &.swiper-pagination-bullet-active{
            background-color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .swiper{
        padding: 40px 25px 60px;
      }
      .swiper-slide {
        text-align: center;
        background-color: #fff;
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0 10px 20px ${({ theme }) => theme['light-color']}10;
        @media only screen and (max-width: 1399px){
          padding: 25px;
        }
        @media only screen and (max-width: 479px){
          padding: 25px 15px;
        }
        &.swiper-slide-active{
          box-shadow: 0 20px 50px ${({ theme }) => theme['light-color']}20;
        }
      }
      .testimonial-block__single{
          figure{
            margin-bottom: 0;
            img{
              margin-bottom: 12px;
            }
          }
          .client-name{
            font-size: 15px;
            margin-bottom: 5px;
            color: ${({ theme }) => theme['dark-color']}
          }
          .client-designation{
            font-size: 13px;
            font-weight: 400;
            opacity: .70;
            margin-bottom: 26px;
            color: ${({ theme }) => theme['gray-color']};
          }
          .client-review{
            font-size: 16px;
            margin-bottom: 0;
            line-height: 1.75;
            color: ${({ theme }) => theme['gray-color']};
          }
      }
    }
    &.theme-2{
      padding: 60px 100px 75px 100px;
      background-color: ${({ theme }) => theme['bg-color-light']};
      @media only screen and (max-width: 1399px){
        padding: 60px 40px 75px 40px;
      }
      @media only screen and (max-width: 991px){
        padding: 50px 70px 55px 70px;
      }
      @media only screen and (max-width: 575px){
        padding: 30px 30px 45px 30px;
      }
      .testimonial-title{
        @media only screen and (max-width: 991px){
          margin-bottom: 20px;
        }
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 22;
        background-color: #fff;
        @media only screen and (max-width: 991px){
          top: auto;
          bottom: -6px;
        }
      }
      .swiper-button-prev{
        left: 5px;
        @media only screen and (max-width: 991px){
          left: 42%;
        }
        @media only screen and (max-width: 575px){
          left: 36%;
        }
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-left.svg').default}');
        }
      }
      .swiper-button-next{
        right: 5px;
        @media only screen and (max-width: 991px){
          right: 42%;
        }
        @media only screen and (max-width: 575px){
          right: 36%;
        }
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-right.svg').default}');
        }
      }
      .swiper{
        padding: 0 20px;
        @media only screen and (max-width: 991px){
          padding: 30px 0 70px 0;
        }
      }
      .swiper-slide {
        background-color: #fff;
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
        @media only screen and (max-width: 479px){
          padding: 24px;
        }
      }
      .testimonial-block__single{
        position: relative;
        .quotation{
          position: absolute;
          ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 40px;
          top: 40px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 25px;
          }
          img{
            @media only screen and (max-width: 479px){
              max-width: 40px;
            }
          }
        }
      }
      .testimonial-block__author{
        direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        img{
          max-width: 70px;
          margin-right: 18px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
          @media only screen and (max-width: 479px){
            max-width: 60px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
        .author-info{
          .client-name{
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 5px;
          }
          .client-designation{
            font-size: 13px;
            opacity: .70;
            margin-bottom: 0;
          }
        }
      }
      .testimonial-block__review{
        direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
        p{
          margin-bottom: 0;
          line-height: 1.75;
          font-size: 16px;
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
    &.theme-3{
      padding-top: 95px;
      @media only screen and (max-width: 991px){
        padding-top: 42px;
      }
      .testimonial-title{
        margin-bottom: 0;
      }
      .swiper-pagination {
        position: absolute;
        height: fit-content;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
        @media only screen and (max-width: 575px){
          top: 20px;
        }
        .pagination-thumb{
          display: inline-block;
          width: auto;
          height: auto;
          opacity: .4;
          margin: 4px 0;
          img{
            max-width: 70px;
            @media only screen and (max-width: 991px){
              max-width: 40px;
            }
            @media only screen and (max-width: 479px){
              max-width: 25px;
            }
          }
          &.swiper-pagination-bullet-active{
            position: relative;
            z-index: 22;
            opacity: 1;
            img{
              transform: scale(1.4);
            }
          }
        }
      }
      .testimonial-block__single{
        padding: 175px 0 86px;
        @media only screen and (max-width: 991px){
          padding: 135px 30px 36px;
        }
        @media only screen and (max-width: 575px){
          padding: 80px 30px 40px;
        }
      }
      .testimonial-block__inner{
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }
      .testimonial-block__review{
        p{
          font-size: 16px;
          color: ${({ theme }) => theme['gray-color']};
        }
      }
      .testimonial-block__author{
        .author-info{
          margin-top: 8px;
        }
        .author-name{
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 3px;
        }
        .author-designation{
          opacity: .70;
          font-size: 14px;
        }
      }
    }
    &.theme-4{
      padding: 60px 100px 75px 100px;
      background-color: ${({ theme }) => theme['bg-color-light']};
      @media only screen and (max-width: 1599px){
        padding: 60px 60px 75px 60px;
      }
      @media only screen and (max-width: 991px){
        padding: 50px 30px 48px 30px;
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 22;
        background-color: #fff;
        @media only screen and (max-width: 575px){
          top: auto;
          bottom: -6px;
        }
      }
      .swiper-button-prev{
        left: 100px;
        @media only screen and (max-width: 1599px){
          left: 50px;
        }
        @media only screen and (max-width: 575px){
          left: 36%;
        }
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-left.svg').default}');
        }
      }
      .swiper-button-next{
        right: 100px;
        @media only screen and (max-width: 1599px){
          right: 50px;
        }
        @media only screen and (max-width: 575px){
          right: 36%;
        }
        &:before{
          font-family: 'Inter';
          content: url('${require('../../static/img/icon/arrow-right.svg').default}');
        }
      }
      .swiper{
        @media only screen and (max-width: 575px){
          padding: 0 0 70px;
        }
      }
      .testimonial-block__inner{
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
        background-color: #fff;
        box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
        text-align: center;
        @media only screen and (max-width: 1599px){
          max-width: 570px;
          padding: 30px;
        }
        @media only screen and (max-width: 991px){
          max-width: 450px;
        }
      }
      .testimonial-block__author{
        img{
          max-width: 100px;
          margin-bottom: 26px;
        }
      }
      .author-info{
        margin-top: 18px;
        .client-name{
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .client-designation{
          font-size: 13px;
          opacity: .70;
          margin-bottom: 0;
        }
      }
      .testimonial-block__review{
        p{
          margin-bottom: 0;
          line-height: 1.75;
          font-size: 16px;
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
  }
  .testimonial-title{
    text-align: center;
  }
`;

const UserCarrdTop = Styled.div`
  .ant-page-header-heading-extra{
    .btn-add_new{
      margin-right: 15px;
      @media only screen and (max-width: 575px){
        margin-right: 6px;
      }
    }
    .action-btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: ${({ theme }) => theme['light-color']};
      @media only screen and (max-width: 575px){
        height: 30px;
        width: 30px;
      }
      &.active{
        background-color: #fff;
        color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const SupportTopWrap = Styled.div`
  background-color: ${({ theme }) => theme['bg-color-light']};
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  margin-bottom: 50px;
  .sDash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .sDash_support-content{
    .sDash_support-content__title{
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${({ theme }) => theme['dark-color']};
      @media only screen and (max-width: 767px){
        font-size: 26px;
      }
    }
    p{
      color: ${({ theme }) => theme['gray-color']};
    }
    .btn-ticket{
      margin-top: 15px;
      height: 46px;
      font-size: 14px;
      font-weight: 500;
      @media only screen and (max-width: 575px){
        margin-top: 0;
      }
    }
  }
  .sDash_support-img{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 0;
    }
    img{
      width: 100%;
      @media only screen and (max-width: 575px){
        margin-top: 30px;
      }
    }
  }
`;

const SupportContentWrap = Styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  padding: 100px 0 50px 0;
  @media only screen and (max-width: 1599px){
    padding: 50px 0 20px 0;
  }
  @media only screen and (max-width: 1199px){
    margin-bottom: 30px;
  }
  .sDash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .sDash-support-link-item{
    max-width: 350px;
    margin: 0 auto 30px;
    padding: 30px;
    text-align: center;
    border-radius: 6px;
    transiiton: .35s;
    border: 1px solid ${({ theme }) => theme['border-color-light']};
    &:hover{
      box-shadow: 0 15px 25px #9299BB15;
      border-color: #fff;
    }
    .sDash-support-link-item__icon{
      height: 80px;
      width: 80px;
      margin: 0 auto 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &.primary{
        background-color: ${({ theme }) => theme['primary-color']};
      }
      &.success{
        background-color: ${({ theme }) => theme['success-color']};
      }
      &.info{
        background-color: ${({ theme }) => theme['info-color']};
      }
    }
    .sDash-support-link-item__title{
      font-size: 20px;
      font-weight: 500;
      color: ${({ theme }) => theme['dark-color']};
    }
    .sDash-support-link-item__content{
      .btn-link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background-color: #EFEFFE;
        border-radius: 20px; 
        margin: 36px auto 0;
        font-size: 15px;
        padding: 0 24.5px;
        width: fit-content;
      }
    }
  }
  .sDash_faq-block{
    margin-top: 70px;
    @media only screen and (max-width: 1150px){
      margin-top: 20px;
    }
    .ant-card{
      border: 1px solid ${({ theme }) => theme['border-color-normal']};
      .ant-card-body{
        h1{
          color: ${({ theme }) => theme['dark-color']};
        }
      }
    }
    .ant-collapse-item {
      &.ant-collapse-item-active{
        box-shadow: 0 0;
      }
      .ant-collapse-header{
        background-color: #fff !important;
        padding: 19.5px 25px !important
        .ant-collapse-arrow{
          color: #9299B8;
        }
      }
      .ant-collapse-content{
        box-shadow: 0 0;
      }
    }
  }
`;

const brdrcolor = '#d4d4d4';
const whitecolor = '#ffffff';
const lightDark = '#333333';
const lightgreen = '#00aa45';
const gray7 = '#545454';
const black = '#000000';
const gray6 = '#f6f8fa';

const UserinfoBox = Styled.div`
position:relative; width: 100%; background: ${whitecolor};z-index: 9;
border:1px solid ${brdrcolor}; padding:15px; max-width: 320px; border-radius: 10px; 

.headbpx{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
    .imgmaindiv{ position: relative;
        .imgdiv{ position: relative; display:flex;
            width:60px; height: 60px;  
           border-radius: 60px; overflow: hidden;                        
        }
        .greentickicon{border:3px solid ${whitecolor}; 
          width: 15px; height: 15px; background:${lightgreen}; border-radius: 40px;
          position: absolute; bottom:0px; right:0px; z-index: 2; display:flex; flex-direction:row; justify-content:center;
          align-items:center;
          img{width: 10px;}
        }
    }
    .rightbtns{ display:flex; flex-direction:row; justify-content:center; align-items:center; margin-top:-10px;
        a{ margin-left: 5px;
            &.btncircle{
                width: 27px; height: 27px; border:1px solid ${brdrcolor}; border-radius: 40px;
                display:flex; flex-direction:row; justify-content:center; align-items:center; 
                svg{fill: ${lightDark}; width: 15px;}
            }
            &.btnfollow{
              color:${whitecolor}; padding:2px 10px; font-weight:500; font-size:12px;
              background:${black};
            }
        }
    }
    
}
&.peopleInfo{
  &:hover{
    background:${gray6}; cursor:pointer;
    h6{
      text-decoration:underline;
      span{text-decoration:none;}
    }
  }
  .headbpx{align-items:flex-start!important;
    .rightbtns{
      .btnfollow{
        color:${whitecolor}; padding:2px 10px!important; font-weight:500; font-size:12px;
        background:${black}!important; height:25px;
      }
    }
  }
  
}
&.postUserdettails{
  position:absolute; display:none; left:0px;
  .headbpx{
    align-items:flex-start;
  }
  p{margin-top: 10px!important; font-size:12px; font-weight:300;font-family:'Inter', sans-serif;}
  &.showbox{
    display:block;
  }
}
.followersbox{display:flex; flex-direction:row; justify-content:'flex-start'; align-items:'center';
  a{
    font-size: 13px; margin-right:15px;
    color: #858585;
    span{font-weight:bold;}
    &:hover{
      color:#000000;
    }
  }
}
.ant-dropdown-link{
  span{font-size: 12px}
}
p{margin-top: 10px!important; font-size:12px; line-height:14px; font-weight:400;font-family:'Inter', sans-serif;}
`;

const UserpostinfoBox = Styled.div`
  width: 100%; background: ${whitecolor}; 
border:1px solid ${brdrcolor}; padding:15px; max-width: 320px; border-radius: 10px; 
.headpostbox{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
    .imgmaindiv{ position: relative;
        .imgdiv{ position: relative;
            width:60px; height: 60px;  
           border-radius: 60px; overflow: hidden;display:flex;                        
        }
        .greentickicon{border:3px solid ${whitecolor}; 
          width: 15px; height: 15px; background:${lightgreen}; border-radius: 40px;
          position: absolute; bottom:0px; right:0px; z-index: 2; display:flex; flex-direction:row; justify-content:center;
          align-items:center;
          img{width: 10px;}
        }
    }
    .rightbtns{ display:flex; flex-direction:row; justify-content:center; align-items:center; margin-top:-15px!important;
      .ant-btn{     background: transparent; width: 30px; height: 30px;
        border-radius: 50px; text-align: center; padding: 5px 0px;    
        svg{width:23px; height:23px;}
        &:hover{
          background:#e1eef6!important; color:#1d9bf0;
          svg{fill:#1d9bf0;}
        }
      }
        a{ margin-left: 5px;  
            &.btncircle{
                width: 27px; height: 27px; border:1px solid ${brdrcolor}; border-radius: 40px;
                display:flex; flex-direction:row; justify-content:center; align-items:center; 
                svg{fill: ${lightDark}; width: 15px;}
            }
            &.btnfollow{
              color:${whitecolor}; font-weight:400; padding:2px 0px;
            }
        }
         
    }
}
.ant-dropdown-link{
  span{font-size: 12px}
}
p{margin-top: 10px!important; font-size:13px;}
`;
const Modalcntbox = Styled.div` 
  text-align:center;
  p{margin:15px 0px 0px; padding:0px; font-size:15px; color:#333333;}
  span{ font-size:12px;
    svg{width:40px; height:40px; 
      fill:#adadad;
    }
  }
`;

const NamelistBox = Styled.div` 
  border:1px solid ${brdrcolor}; padding:5px; text-align:left; border-radius:5px;   
  .labeltext{font-size:11px; color:${lightDark}}   
  input{border:0px solid ${brdrcolor}; padding:2px;}
  input:focus{box-shadow:none!important; padding:2px;}
`;
const Notebox = Styled.div` 
 font-size:10px; color:${lightDark}}; width:100%; text-align:left;
`;
const Namedetails = Styled.div` 
 margin-top: 0px;
  .profilename{ display:flex; flex-direction:row; justify-content:flex-start;align-items:center;
     color:${lightDark}; font-size: 15px;   font-weight: 600;
      span{font-size: 14px; font-weight: 300; display: inline-block; margin-left:5px;}     
      .svgicons{
        svg{width:15px; height:15px; margin-top:3px;}
      }                          
  
}
`;

const PostBox = Styled.div` 
  display:flex;flex-direction:column;justify-content;flex-start; align-items:center;
  padding:20px 15px 0px; width:100%; border-top:1px solid ${brdrcolor};
  cursor:pointer;
   
  .postDetails{padding:0px 0px 15px 50px; width:100%; margin-top:-5px;
    &.notificationBoxInner{border:0px!important;}
    img, video{max-width:100%!important;}
    @media screen and (max-width:767px){
      width:100%;
    }
    .videobox{
      width:100%; height:auto;    border-radius:20px; overflow:hidden; 
      @media screen and (max-width:767px){
        width:100%; height:auto;
      }
    }
    p{font-size:15px; font-family:'segoe_ui', sans-serif; line-height:20px; color:#000000; font-weight:400; margin-top:0px!important;}
    .postimagebox{
    
       .ant-image{border-radius:15px;
        img{border-radius:15px;}
       }
    
      ul {
        list-style: none;
        padding: 10px 1px;
        overflow: hidden; display:flex; flex-direction:row; justify-content:center,
        align-items:center; flex-wrap:wrap; 
        li {
          
          outline: 0spx solid gray;
          text-align: center;
          line-height: 2;
          img{width:100%}
          
        }
      }
      */
      @for $i from 1 through 4 {
        li:first-child:nth-last-child(#{$i}),
        li:first-child:nth-last-child(#{$i}) ~ li {
          width: 100% / $i;
        }
      }

      /**
      * The non-sassy way
      */
      /* one item */
      li:first-child:nth-last-child(1) {
          width: 100%;
      }

      /* two items */
      li:first-child:nth-last-child(2),
      li:first-child:nth-last-child(2) ~ li {
          width: 50%;
      }

      /* three items */
      li:first-child:nth-last-child(3),
      li:first-child:nth-last-child(1) ~ li {
        width: 100%;
      }
      li:first-child:nth-last-child(3) ~ li {
          width: 50%;
      }

      /* four items */
      li:first-child:nth-last-child(4),
      li:first-child:nth-last-child(4) ~ li {
          width: 50%;
      }

          }
        }
      &:hover{
        background:#f7f7f7;
      }
  .userpostBox{ border:0px; width:100%; max-width:100%; padding-bottom:0px; padding-top:0px; padding:0px;
    background:transparent;
    .headpostbox{display:flex;flex-direction:row;justify-content:space-between; align-items:center;
      .usernamepic{
        display:flex;flex-direction:row;justify-content:flex-start; align-items:center;
        .namedetails{
          margin-left:10px;
          .profilename{
            line-height:18px;
          }
        }
      }
      .imgmaindiv {position:relative;
        .imgdiv{position:relative;
          width:40px; height:40px; 
        }
        .greentickicon{width:18px; height:18px;}
      }
      .rightbtns{
        .btncircle{
          border:0px;
          svg{width:20px; height:25px;}
        }
      }
      .ant-btn{border:0px;}
    }
  }
  
   
  }
`;
const CommentSharebox = Styled.div`
  display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-top:25px;
  ul{ display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-left:-8px;
    width:78%;
    li{ display:flex; margin-right:25px; color:${gray7}; font-size:13px;
    flex-direction:row; justify-content:center; align-items:center;
      @media screen and (max-width:767px){
        margin-right:5px;
      }
      span{font-size:14px;}
      .btncmtbox{
        width:36px; height:36px; border-radius:50px; padding:0px; margin-right:8px; border:0px;
        display:flex; flex-direction:row; justify-content:center; align-items:center;
        background:transparent;
        &:hover, &.active{
          background:#e1eef6!important;
        }
      }
    img{width:18px; height:18px;}
    svg{width:18px; height:18px; }
      span{
        svg{ margin-right:3spx; width:15px; height:15px;
          fill:${black};
        }
      }
      &:hover{
        .btncmtbox{
          background:#e1eef6!important;
          svg{fill:#50b1f3;}
        }
        span{color:#50b1f3;}
      }
      &:nth-child(2){
        &:hover{
          .btncmtbox{
            background:#def1eb!important;
            svg{fill:#00ba7c;}
          }
          span{color:#00ba7c;}
        }
      }
      &:nth-child(3){
        .activelike{
          svg{fill:#f8197f;}
        }
        .btncmtbox{
        span{margin-top:3px;}
        }
        &:hover{
          .btncmtbox{
            background:#f7e0eb!important;
            svg{fill:#f8197f;}
          }
          span{color:#f8197f;}
        }
      }
    }
  }
  .rightcntbtn{ display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
    .ant-btn{
      width:36px; height:36px; border-radius:50px; padding:0px; margin-left:8px; border:0px;
      display:flex; flex-direction:row; justify-content:center; align-items:center;
      background:transparent;
      svg{width:18px; height:18px; }
      &:hover{        
          background:#e1eef6!important;
          svg{fill:#50b1f3;} 
      }
    }
  }
  .shareBtn{ background:transparent;
    border:0px;
  }
`;

const DropdownBox = Styled.div` 
 border:1px solid ${brdrcolor};border-radius:5px;
 .ant-select:not(.ant-select-customize-input) .ant-select-selector{border:0px!important; height:30px;} 
 .ant-select-focused{box-shadow:none;}
 .labeltext{
  font-size:11px; color:${gray7}; font-weight:300; padding:0px 10px;
 }
`;
const FormBox = Styled.div`
.ant-select-selection-overflow{margin-top:-10px;}
 .CheckBoxItem{
  margin-top:10px;
 }
    .ant-form-item{
      margin-bottom:15px;
    }
    .ant-checkbox-wrapper{
      font-size:13px; 
      span{color:${gray7};}
    }
    .twoColumn{
      display:flex;flex-direction:row; justify-content:space-between; align-items:center;
      .colbox{
        width:49%;
      }
    }
`;
const SearchBox = Styled.div`{
  width:100%; margin-top:10px; display:flex; flex-direction:row; justify-content:center; align-items:center;
  .form-control{
    width:95%; border-radius:0; height:40px; border:0px;
  }
  .messgsearcharea{
    width:95%;display:flex; flex-direction:row; justify-content:center; align-items:center;
    border:1px solid #ccc; border-radius:80px; overflow:hidden; height:40px;
    .ant-btn{border:0px;}
  }
  .searchIconbox{margin-left:15px;
    svg{fill:#aaaaaa;}
  }

}`;
const MessageMainBoxInner = Styled.div`{
  display:flex; flex-direction:row;
  &.notificationBoxInner{
    flex-wrap:wrap; width:100%; display:flex; flex-direction:row; justify-content:space-between;
    a{
      div{
        border:0px;  padding:0px; font-size:14px;
      }
    }
}
}`;
const MessageMainBox = Styled.div`{
  width:100%; margin-top:10px; display:flex; flex-direction:row; justify-content:space-between; align-items:center;
  padding:8px 15px;
  .userPic{
    width:40px; height:40px; border-radius:100px; overflow:hidden;display:flex;  margin-right:8px;
    align-items:center;
    img{
      max-width:100%;
    }
  }
  .nameMsgBox{
    display:flex; flex-direction:row; justify-content:space-between; align-items:center; width:88%;
    .namedtls{ font-size:15px;
      .uname{font-weight:bold; margin-right:5px;  marign-left:4px;}
      .greentickicon{width:15px; background:#5bc04a; height:15px; display:flex; flex-direction:row;
        justify-content:center; align-items:center; border-radius:60px; margin-right:5px;
        img{max-width:100%; height:10px;}
      }
      .accountname{
        color:#536471;margin-right:5px;
      }
      .msgText{
        font-family: 'Inter'; font-size:14px;
      }
      .datebox{ color:#536471; font-family: 'Inter'; font-size:14px}
    }
  }

  &.notificationBox{
    display:flex; flex-direction:row; ustify-content:flex-start; align-items:flex-start;
    cursor:pointer;border-bottom: 1px solid rgba(0,0,0,0.08)!important;
    margin-top:0px; padding:10px 15px;
    .innerNotification{
      width:100%; display:flex; flex-direction:row; justify-content:space-between;
    }
    .nameMsgBox{width:100%; display:flex; flex-direction:row; justify-content:flex-start; margin-top:8px;}
    .iconBox{ margin-right:15px; margin-top:5px;
      i{font-size:23px;
        &.violet{color:#f91880;} 
        &.blue{color:#0211e5;}
        &.green{color:#148fce}
        &.blue2{color:#960ac6;}
        &.blue3{color:#91a2ff;}
      }
    }
    &:hover{
      background:#f7f7f7; 
    }
  }
  

}`;
const ActiveUser = Styled.div`{
  width:95%; margin-top:75px; margin-left:15px; margin-right:15px; display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
  overflow:auto; padding:0px 20px 15px;
  @media screen and (max-width:767px){
    margin-top:15px;
  }
 &::-webkit-scrollbar {
    width:3px; height:4px;
  }
  

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  
  
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
   
 .userDataBox{ display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
  .userPic{
    width:40px; height:40px; border-radius:100px; overflow:hidden;display:flex;  margin-right:8px; position:relative;
    img{
      max-width:100%;
    }
    span{
      width:6px; height:6px; background:#03bc33; display:block; border-radius:50px; position:absolute;
      top:5px; right:6px; z-index:1;
    }
  }
 }

}`;
const ChatMainBox = Styled.div`{
  width:100%; margin-top:10px; display:flex; flex-direction:column; justify-content:flex-start; align-items:center;
  height:98vh; 
&.conversionInfoBox{ overflow:auto;
  &.scrolldisable{
    overflow:visible; height:auto;
  }
  .chatUsername{
    width:100%;  display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
    h2{margin-bottom:0px; text-transform: capitalize;}
    svg{fill:#333333;}
    .btnbackBox{
      margin-right:10px;
    }
  }
  .settingBox{ width:100%;
    h2{
      font-size: 20px;  color: #000000; margin-bottom: 0px; font-family: "segoe_ui_bold", sans-serif;
      }
      h3{ font-size: 16px;  color: #000000; margin-bottom: 0px; font-family: "segoe_ui", sans-serif;
      &.flexSpacebetween{
        display:flex; flex-direction:row; justify-content:space-between;
      }
    }
    .martop10{margin-top:15px!important;}
      h4{
        font-size:16px;  color: #000000; margin-bottom: 0px; font-family: "segoe_ui_bold", sans-serif;
        margin-bottom:10px;
        }
        .dividerBox{border-top:1px solid rgba(0,0,0,0.08); margin-top:15px; padding-top:15px;}
      .header{
        display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
        svg{fill:#333333;}
        a{margin-right:10px;}
      }
      .ant-radio-group{
        label{ display:flex; flex-direction:row-reverse; justify-content:space-between; align-items:center;
          &.ant-radio-wrapper{
           &:after{
            display:none;
           } 
           .ant-radio-checked .ant-radio-inner, .ant-radio:hover .ant-radio-inner, .ant-radio-checked .ant-radio-inner:focus, .ant-radio-checked::after{
            border-color:#333333!important;
           }
          }
        }
      }
      .nameMsgBox{
        .namedtls{
          display:flex; flex-direction:row; justify-content:flex-start; align-items:flex-start;
          .flexcolumn{
            display:flex; flex-direction:column;
            span{line-height:18px;
              &.xname{
                color:#536471;
              }
            }
          }
          .blueTick{width:20px;}
        }
      }
    p{ font-size: 13px; color:#536471;}
    ul{
      li{
        a{
          color:#0f1419; font-size:15px; display:flex; flex-direction:row; justify-content:space-between;
          align-items:center; padding:12px 15px;    
          span{display: flex; flex-direction: row; justify-content: flex-start; align-items: center;}
          i{margin-top:3px; margin-right:7px;}  
            svg{fill:#536471; width:20px;}
            &:hover{
              background:#f7f9f9!important;
              
            }
        }
      }
    }
    .deactivatelink{
      display: flex; flex-direction: row; justify-content:center; align-items:center;
      a{
        font-size:16px; color:red;
      }
      &.martop15{margin-top:20px;}
    }
    .formMain{
      margin-top:15px;
      ul{
        li{ padding:12px 0px;  border-bottom:1px solid rgba(0,0,0,0.08);
          .ant-input{
            height:56px;
          }
          a{
            padding:0px; font-size:12px; margin-top:2px;
            &:hover{
              background:#ffffff!important;
            }
          }    
        
          &:nth-child(2){
            .ant-input{margin-bottom:15px;}
          }
          &:last-child{
            &.deactivatelink{
              display: flex; flex-direction: row; justify-content:center; align-items:center;
              a{
                font-size:16px; color:red;
              }
            }
          }
          p{ font-size:13px; margin-top:0px;
            a{display:inline-block; font-size:13px; color:#000000;}
          }
        }
      }
      &.notificationbox{
        ul{
          li{border:0px;}
        }
      }
      &.decativate{
      ul{
        li{
          p{ font-size:12px;}
        }
      }
      }
    }
  }
  .ChatUserNotification{
    display:flex; flex-direction:column; padding:10px 0px; width:100%;
    h3{font-size:18px; font-weight:bold; color:#333333; margin-bottom:0px;}
    .snoozBox{
      font-size:16px; width:100%; display:flex; flex-direction:row; justify-content:space-between;
      align-items:center; padding:10px 0px;
    }
    .InfobtnBox{
      display:flex; flex-direction:column; justify-content:Center; align-items:center;
      padding-top:10px;
      a{
        width:100%; text-align:center; padding:10px; font-size:16px;
        &.redTextbtn{color:red;}
      }
    }
  }
  .chatUserBox{
    width:100%;
    .btnBlack {border-radius:80px;}
    .chatbox{padding:0px;}
    .msgChatBoxMain{
      width:100%;     display: flex;  flex-direction: row; justify-content: space-between;
      align-items: center; border-bottom:1px solid #e4e4e4; padding-bottom:8px;
      .ant-btn{font-weight:bold;}
      .msgChatBox{
        display: flex;  flex-direction: row; justify-content: space-between;
        .userPic{
          width:40px; height:40px; border:0px solid #000; min-width:40px; border-radius:80px; overflow:hidden;
          display:flex; flex-direction:row; justify-content:center; align-items:center;
          img{width:60px!important;}
        }
        a{
          background: rgb(239, 243, 244); font-size: 12px; color: rgb(107, 119, 130); font-family: segoe_ui, sans-serif;
        padding: 2px 5px;  border-radius: 8px;
        }
      }
      &:hover{
        background:#f7f9f9; cursor:pointer;
      }
    }
  }
  .groupbox{
    .msgChatBoxMain{
      .msgChatBox{ display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-bottom:5px;
        margin-top:15px;
        .userPic{margin-right:10px;
          img{width:100%}
        }
        .nameMsgBox{
          .namedtls{ display:flex; flex-direction:row; justify-content:space-between; align-items:center;
            .uname{font-weight:bold; font-size:17px;}
          }
        }
        
      }
      .groupedit{border:0px!important; background:transparent!important;}
    }
  
  }
  .groupPeople{
    width:100%; margin-top:15px;
    h3{font-weight:bold;  font-size:17px;}
    .chatbox{margin-top:0px;
      &.groupChatBox{
        flex-wrap:wrap;
      .btnAddPeople{
        width:100%; text-align:center; padding:16px 0px; font-size:16px;
        &:hover{
          background:rgba(0,0,0,0.03);
        }
      }
      .msgChatBoxMain{ margin-bottom:0px; padding-top:10px;
        .ant-dropdown-trigger{display:none;}
        &:hover{
          .ant-dropdown-trigger{display:block;}
        }
      }
      }
    }
  }
}
  .chatMainbox{ width:100%; display:flex; flex-direction:column; justify-content:space-between; position:relative;
     height:89vh; 
    .chatMsgBox{
      position:relative;
      overflow:auto;  height:89vh; 
      &::-webkit-scrollbar {
        width: 5px;
      }
      
      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #888;
      }
      
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
   

    .chatUsername{width:100%;display:flex; flex-direction:row; justify-content:space-between; align-items:center;
      .btninfo{border:0px; padding:4px 8px; height:auto; box-shadow:none; border-radius:80px;
        width:30px; height:30px;  display:flex; flex-direction:row; justify-content:center; align-items:center;
        svg{width:18px; height:18px;}
        span{
          height:18px;
        }
        &:hover{
          background:#e6e6e7!important;
        }
      }
      h2{font-size:18px; font-family:'Inter'; font-weight:600; 
      .svgicons{height:18px; 
        svg{width:20px; height:20px;}
      }
    }
      a{margin-right:10px;}
    }

    .profileMain{ width:100%;  width: 100%; margin-top:30px; border-bottom:1px solid #ebebeb;
      display: flex; flex-direction: column;justify-content: center; align-items: center;
      padding-bottom:20px;
      .userpic{
        width:60px; height:60px; border-radius:80px; overflow:hidden;
        display: flex; justify-content: center; align-items: center;
        img{ min-height:70px;}
      }
      h3{width:100%; text-align:center; font-size:16px; font-weight:bold; margin-bottom:0px; padding-bottom:0px;
        display:flex; flex-direction:row; justify-content:center;align-items:center; line-height:16px; margin-bottom:3px;
        svg{width:16px; height:16px;}
      }
      .userprofilename{
        font-family:'Inter'; font-size:14px; text-align:center; line-height:16px; color:#536471; margin-bottom:5px;
      }
      p{font-family:'Inter'; font-size:14px; text-align:center; line-height:18px; color:#333333; margin-bottom:5px;}
      .fnt18{font-family:'Inter'; font-size:14px; text-align:center; line-height:18px; color:#536471;}
      .cntFollowed{font-family:'Inter'; font-size:11px; text-align:center; line-height:18px; color:#536471; margin-bottom:5px;}
    }

    
    .chattingBox{ margin-top:20px; display: flex; flex-direction: column; justify-content: flex-end;
   
      ul{
        li{ margin-bottom:15px; display:flex; flex-direction:column; justify-content:flex-start; align-items:flex-start;
          .msgChatBox{
            display:flex; flex-direction:row; justify-content:flex-start; align-items:center;
            width:100%;
            .chatIconsBox{
              flex-direction:row; justify-content:flex-start; align-items:center; display:none;
              a{
                margin:0px 3px;
                svg{fill:#7c868e;}
              }
            }
          }
          .chatTextcnt{ max-width:78%; margin-bottom:2px; word-break:break-all; margin-right:10px;
            background:#eff3f4; padding:20px; border-radius:30px 30px 0px 30px;            
           div{margin:0px; padding:0px; font-size:14px; line-height:20px; font-family:'Inter'; font-weight:normal;}
          }  
          .chatDate{font-size:12px; color:#536471;}   
          &:hover{
            .chatIconsBox{display:flex;}
          }    
          &.userReply{
            align-items:flex-end; padding-right:15px;
            .msgChatBox{
              display:flex; flex-direction:row-reverse; justify-content:flex-start; align-items:center;
              width:100%;
            }
            .chatTextcnt{background:#1d9bf0;max-width:78%; color:#ffffff; word-break:break-all;margin-left:10px;
              p{color:#ffffff;}
            }
            .replyMessageBox{
              h5{font-size:11px; color:#536471; font-weight:normal; font-family: 'segoe_ui';
                img{width:11px;}
              }
              .replymsg{position:relative;
                .oldMsgbox{
                  background:rgb(239, 243, 244);     word-break: break-all;
                  margin-left: 10px; margin: 0px;padding: 0px; font-size: 14px;
                  line-height: 20px; font-family: Inter; font-weight: normal;
                  color:#536471;font-family: 'segoe_ui'; padding:8px 15px 40px; border-radius:30px;
                }
                .newMsgbox{
                  background: rgb(29, 155, 240);color: rgb(255, 255, 255);
                  word-break: break-all; margin-left: 10px;     padding: 10px;
                  margin-top: -35px; border-radius: 40px 40px 0px 40px;
                  font-size: 15px;
                }
              } 
            }
          } 
        }
      }
    }
  }
 .chattboxFooter{
  position:sticky; bottom:0px; width:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;
  background:#ffffff; padding:10px 0px 0px;
  .ant-btn{ padding:0px; border:0px; background:transparent; margin:0px 4px; height:15px;
    svg{
      width:20px; height:20px;
    }
  }
  .replyBottombox{
    background:#f7f9f9; border-left:4px solid #242e36; width:100%; padding:10px 12px;
    display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-bottom:10px;
      h3{margin-bottom:0px; font-size:12px; font-weight:bold; line-height:15px; 
        span{width:100%; display:block; font-weight:normal;}
      }
    }
  .writeChat{display:flex; flex-direction:row; justify-content:space-between; align-items:center;
    background:#eff3f4; width:100%; border-radius:20px; padding:5px 15px; min-height:50px;
    .leftbox{ display:flex; flex-direction:row; justify-content:flex-start; align-items:center; height:40px;
      .ant-btn{ padding:0px; border:0px; background:transparent; margin:0px 4px; height:15px;
        svg{
          width:15px; height:15px;
        }
        &.btnUploadimg{
          position:relative; cursor:pointer;
          input{position:absolute; width:30px; top:0px; opacity:0;}
        }
      }
    }
    .chatTextBox{
      width:100%;  
      textarea{
        background:transparent; border:0px;
        &:focus{
          outline:none; box-shadow:none;
        }
      }
    }
   
  } 
 }

}`;
const PolpostBox = Styled.div`{

  .polPostbox{ border:0px solid #000000;
    .polradio{
      .ant-radio-group{
        display:flex; flex-direction:column; justify-content:flex-start;
        label{ margin-bottom:10px;
          text-transform:capilatize;
          span{
            text-transform:capitalize; display:flex; flex-direction:row; justify-content:space-between;
           
          }
        }
        .ant-radio-checked .ant-radio-inner{border-color:#000000;}
      }
      .totalPolCount{margin:8px 0px;
      p{padding-bottom:0px; margin-bottom:0px;  background:#f4f4f4; padding:5px 10px; display:inline-block;}
      }
      &.votted{
        .ant-radio-group{
          display:flex; flex-direction:column; justify-content:flex-start;
          label{ margin-bottom:10px; padding:4px;
            text-transform:capilatize;
            span{ color:#000000;
              text-transform:capitalize; display:flex; flex-direction:row; justify-content:space-between;
             &:nth-child(2){width:100%;
              .valueMain{
                width:100%;
               }
             }
             &.ant-radio-checked{display:none;}
            }
            &.ant-radio-wrapper-checked{
              background:#e9e9e9; 
            }
          }
          .ant-radio-checked .ant-radio-inner{border-color:#000000;}
        }
      }
    }
  }

}`;
const Communitiesb = Styled.div`{
  display:flex; flex-direction:row; justify-content:space-between; align-items:center; margin-bottom:15px;
  margin-top:15px; padding:0px 10px;
  .communitiesbox{
    width:140px; height:100px; overflow:hidden; border:1px solid #cccccc; border-radius:10px; position:relative;
    img{max-width:100%; height:60px}
    .communitiesName{ 
      height: 42px; display: flex; flex-direction: row;justify-content: flex-start;
      align-items: center; padding-left: 10px; color: #ffffff; font-size: 14px;  font-weight: bold;}
  }
}`;

const DiscoverCommunities = Styled.div`{
  display:flex; flex-direction:column; justify-content:flex-start; align-items:flex-start; margin-bottom:15px;
  margin-top:15px;
  &.eventDetails{
    margin-top:60px;
    .btnloadMore{
      width:100%; text-align:center; padding:10px 0px; font-size:16px; font-weight:bold;
      display:flex; flex-direction:row; justify-content:center; align-items:center; cursor:pointer;
      &:hover{
        background: rgb(241, 247, 254);
      }
    }
    .disCommunities{ align-items:flex-start; cursor:pointer; padding-right:0px;
      border-bottom:1px solid color:rgb(241, 247, 254);
      .comminitiesImage{
        width:150px;
        img{
          width:100%;
        }
      }
      .rightBox{ flex-wrap:wrap; align-item:flex-start; width:100%;
        .CommunitiesDetails{ min-height:70px; display: flex;
          flex-direction: column; justify-content: center;
          .countMembers{
            font-size:16px; font-weight:500;
          }
          h4{
            margin-top:6px;
          }
        }
      
        .countMembers{font-size:13px;
          &.badgebox{
            background:#ecf2fb; padding:3px 10px; border-radius:40px; border:1px solid rgb(219 230 246);
          }
        }
        .eventBottom{
          display:flex; flex-direction:row; justify-content:space-between; align-items:center;
          a{margin:0px 10px;
            svg{fill:#333333; width:18px;}
          }
          .eventRight{
            display:flex; flex-direction:row; justify-content:flex-end; align-items:center;
            a{
              width: 30px; height: 30px; border:0px solid rgb(204, 204, 204); border-radius: 80px;text-align: center;
                display: flex; flex-direction: row; justify-content: center;  margin: 0px 5px;
              &:hover{
                background:rgb(225, 238, 246) !important; 
                svg{
                  fill:rgb(80, 177, 243);
                }
              }
              }
            svg{width:15px;fill:#333333;}
          }
        }
      }
    }
    h3{border-bottom:1px solid rgba(0,0,0,0.08); width:95%; margin-top:20px; padding-bottom:10px;}
    .eventSearch{ width:100%;  padding:10px 15px 10px; margin-bottom:15px;   margin-top:0px; background:#eef6ff; 
      ul{ width:100%; margin-top:10px;
        display:flex; flex-direction:row; justify-content:space-between; align-items:center;
        li{width:25%;
          label, p{font-size:15px; color:#000000; line-height:16px; height:auto; font-family: "Inter", sans-serif;}
          p{margin:0px; padding:0px;}
          .ant-form-item-label{line-height:10px;}
          .ant-form-item{margin-bottom:0px;
            .ant-form-item-row{
              display:flex; flex-direction:column;
              .ant-form-item-label{text-align:left!important;}
            }
          }
          a{
            background:rgba(0,0,0,0.05); padding:8px 15px; border-radius:40px; font-size:15px;
            font-weight:600;  color:#333333;
            &.resetLink{background:rgb(21 108 207); color:#ffffff}
            &.ant-dropdown-trigger{
              background:#ffffff; color:#000000; width:100%; border-radius:0px; display:flex;
              border: 1px solid #d9d9d9; border-radius:5px; height:42px; flex-direction:row;
              justify-content:space-between; align-items:center; 
              
            }
            .placeholderlabel{
              font-size:15px; color:#cccccc; font-weight:400;
            
            }
          }
          &:last-child{
            width:110px;
          }
        }
      }
    }
  }
  .btnBox{width:100%; margin-top:10px;  display:flex; flex-direction:column; justify-content:center; align-items:center;
    a{font-size:15px;}
  }
  h3{font-weight:bold; margin-left:15px;}
  .disCommunities{ display:flex; flex-direction:row; justify-content:flex-start; align-items:center; flex-wrap:wrap;
    margin-bottom:0px; width:100%; padding:12px 15px; border-bottom:1px solid  rgb(229 236 245);
    &:hover{
      background:rgb(241 247 254);
    }
    .comminitiesImage{
      width:96px; height:96px; overflow:hidden; border-radius:10px; margin-right:15px;
      img{width:96px; height:96px;}
    }
    .rightBox{
      .CommunitiesDetails{
        display:flex; flex-direction:column; justify-content:flex-start; align-items:flex-start;
        h4{font-size:18px; line-height:20px; margin-bottom:5px; padding-bottom:0px; font-weight:bold;}
        .countMembers{font-size:15px; color:rgb(83, 100, 113);
          strong{color:#333333;}
          p{
            font-weight:400; font-size:15px; line-height:20px; color:#5a5a5a;
          }
          &.badgebox{
            background:#ecf2fb;
          }
        }
        
      }
      .joinedMembers{
        display:flex; flex-direction:row; justify-content:flex-start; align-items:flex-start;
        padding-left:10px; margin-top:15px;
        span{
          width:30px; height:30px; border-radius:100px; overflow:hidden;
          display:flex; flex-direction:row; justify-content:center; align-items:center;
          border:2px solid #ffffff; margin-left:-12px;
        }
      }

    }
  
 
}`;

const MainTabs = Styled.div`{
  display:flex; flex-direction:row; justify-content:center; align-items:center; margin-top:15px;
  border:0px solid #000; width:100%;
  .notificationMaintabs{
    display:flex; flex-direction:row; justify-content:center; align-items:center; border:0px solid #000;
    width:100%;
    .ant-tabs{ width:100%;
      .ant-tabs-nav{ display:flex; flex-direction:row; justify-content:center;
        .ant-tabs-nav-wrap{
          max-width:75%;
          .ant-tabs-tab-btn{
            font-size:15px; font-weight:bold; color:#71828f;
            
          }
          .ant-tabs-tab-active{
            .ant-tabs-tab-btn{
             color:#000000;              
            }
          }
          

        }
      }
      .ant-tabs-ink-bar{background:#000000; height:4px!important;}
    }
  }
 
}`;

const SettingsBox = Styled.div`{
    width:100%;
    ul{
      li{
        button{
          width:100%; border:0px;
          display:flex; flex-direction:row; justify-content:space-between; align-items:center;
          padding: 11px 10px 11px 20px; border-right:2px solid #ffffff;
          height: auto; font-size:16px; border-radius:0px;
          &:hover{
            background:#f7f9f9!important;
            border-right:2px solid #000000;
          }
          svg{fill:#536471; width:20px;}
        }
      }
    }
}`;

export {
  PolpostBox,
  Communitiesb,
  DiscoverCommunities,
  MainTabs,
  SettingsBox,
  TestimonialWrapper,
  PricingCard,
  ListGroup,
  Badge,
  GalleryNav,
  UserCard,
  GalleryCard,
  UsercardWrapper,
  UserTableStyleWrapper,
  FaqCategoryBox,
  FaqSupportBox,
  FaqWrapper,
  SearchResultWrapper,
  ResultList,
  MaintananceWrapper,
  ErrorWrapper,
  ComingsoonStyleWrapper,
  AddUser,
  ChangelogWrapper,
  VersionHistoryList,
  TestimonialStyleWrapper,
  UserCarrdTop,
  SupportTopWrap,
  SupportContentWrap,
  UserinfoBox,
  Modalcntbox,
  NamelistBox,
  Notebox,
  PostBox,
  Namedetails,
  CommentSharebox,
  UserpostinfoBox,
  DropdownBox,
  FormBox,
  SearchBox,
  MessageMainBox,
  ActiveUser,
  ChatMainBox,
  MessageMainBoxInner,
  LinkDiv,
};
