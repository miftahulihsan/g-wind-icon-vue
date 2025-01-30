<script setup lang="ts">
    import {
      GIconAndroid,
      GIconArrowDown,
      GIconArrowLeft,
      GIconArrowRight,
      GIconArrowSkipLeft,
      GIconArrowSkipRight,
      GIconArrowUp,
      GIconBank,
      GIconBankFavorite,
      GIconBiometricFace,
      GIconBiometricFinger,
      GIconBirthday,
      GIconCalendar,
      GIconCall,
      GIconCamera,
      GIconCase,
      GIconCIF,
      GIconChart,
      GIconCheck,
      GIconCheckBox,
      GIconChevronDoubleDown,
      GIconChevronDoubleLeft,
      GIconChevronDoubleRight,
      GIconChevronDoubleUp,
      GIconChevronDown,
      GIconChevronLeft,
      GIconChevronRight,
      GIconChevronUp,
      GIconCopy,
      GIconCross,
      GIconDanger,
      GIconDelete,
      GIconDocument,
      GIconDocumentCheck,
      GIconDownload,
      GIconDrodpownDown,
      GIconDrodpownLeft,
      GIconDrodpownRight,
      GIconDrodpownUp,
      GIconEdit,
      GIconEditPIN,
      GIconEditPassword,
      GIconEye,
      GIconEyeSlash,
      GIconFilter,
      GIconFitToWidth,
      GIconFlag,
      GIconFlagEngland,
      GIconFlagIndonesia,
      GIconForgetPIN,
      GIconGadaiEmas,
      GIconGCash,
      GIconGCashColored,
      GIconGPoint,
      GIconGPointColored,
      GIconHelp,
      GIconIDCard,
      GIconIDCardAdd,
      GIconImage,
      GIconImageAdd,
      GIconInfo,
      GIconLink,
      GIconLinkSlash,
      GIconList,
      GIconLocation,
      GIconLocationOutlet,
      GIconLocationPinPoint,
      GIconLock,
      GIconLogout,
      GIconMail,
      GIconMaximize,
      GIconMenu,
      GIconMessage,
      GIconMetodePembayaran,
      GIconMicrophone,
      GIconMinimize,
      GIconMinus,
      GIconMinusRound,
      GIconMoney,
      GIconNPWP,
      GIconOffice,
      GIconOnGoingCall,
      GIconOtherHorizontal,
      GIconOtherSquare,
      GIconOtherVertical,
      GIconPegadaianCircle,
      GIconPercentage,
      GIconPieChart,
      GIconPin,
      GIconPlus,
      GIconPlusRound,
      GIconPremium,
      GIconPrice,
      GIconPriceInfo,
      GIconPrint,
      GIconProfile,
      GIconProfileAvatar,
      GIconProfileRisk,
      GIconQRCode,
      GIconRefresh,
      GIconReply,
      GIconReverse,
      GIconRoundText,
      GIconSearch,
      GIconSend,
      GIconSetting,
      GIconShare,
      GIconShareEmail,
      GIconShareFacebook,
      GIconShareInstagram,
      GIconShareLinkedin,
      GIconSharePinterest,
      GIconShareTwitter,
      GIconShareWhatsapp,
      GIconShareYoutube,
      GIconSID,
      GIconSort,
      GIconSoundHigh,
      GIconSoundLow,
      GIconSoundMute,
      GIconStar,
      GIconStarRound,
      GIconSwitch,
      GIconTabEmas,
      GIconTalk,
      GIconTime,
      GIconTimer,
      GIconTransaction,
      GIconUpload,
      GIconUserAdd,
      GIconUserDelete,
      GIconVoucher,
      GIconWoman,
      GIconWorld,
    } from './assets/IconsSource';
    import 
        GIcon
  from './components/GIcon';

    const getTextCopy = (text : string) => {
      navigator.clipboard.writeText(text)
      return alert(text+" has been copied")
    }
</script>

<template>

    <div class="bodywrap">
      <div class="icon-container" v-on:click="getTextCopy(GIconAndroid[0])">
  <GIcon :icon="GIconAndroid" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconAndroid</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowDown[0])">
  <GIcon :icon="GIconArrowDown" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowDown</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowLeft[0])">
  <GIcon :icon="GIconArrowLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowRight[0])">
  <GIcon :icon="GIconArrowRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowSkipLeft[0])">
  <GIcon :icon="GIconArrowSkipLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowSkipLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowSkipRight[0])">
  <GIcon :icon="GIconArrowSkipRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowSkipRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconArrowUp[0])">
  <GIcon :icon="GIconArrowUp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconArrowUp</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconBank[0])">
  <GIcon :icon="GIconBank" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconBank</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconBankFavorite[0])">
  <GIcon :icon="GIconBankFavorite" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconBankFavorite</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconBiometricFace[0])">
  <GIcon :icon="GIconBiometricFace" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconBiometricFace</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconBiometricFinger[0])">
  <GIcon :icon="GIconBiometricFinger" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconBiometricFinger</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconBirthday[0])">
  <GIcon :icon="GIconBirthday" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconBirthday</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCalendar[0])">
  <GIcon :icon="GIconCalendar" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCalendar</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCall[0])">
  <GIcon :icon="GIconCall" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCall</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCamera[0])">
  <GIcon :icon="GIconCamera" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCamera</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCase[0])">
  <GIcon :icon="GIconCase" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCase</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCIF[0])">
  <GIcon :icon="GIconCIF" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCIF</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChart[0])">
  <GIcon :icon="GIconChart" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChart</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCheck[0])">
  <GIcon :icon="GIconCheck" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCheck</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCheckBox[0])">
  <GIcon :icon="GIconCheckBox" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCheckBox</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronDoubleDown[0])">
  <GIcon :icon="GIconChevronDoubleDown" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronDoubleDown</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronDoubleLeft[0])">
  <GIcon :icon="GIconChevronDoubleLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronDoubleLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronDoubleRight[0])">
  <GIcon :icon="GIconChevronDoubleRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronDoubleRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronDoubleUp[0])">
  <GIcon :icon="GIconChevronDoubleUp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronDoubleUp</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronDown[0])">
  <GIcon :icon="GIconChevronDown" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronDown</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronLeft[0])">
  <GIcon :icon="GIconChevronLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronRight[0])">
  <GIcon :icon="GIconChevronRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconChevronUp[0])">
  <GIcon :icon="GIconChevronUp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconChevronUp</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCopy[0])">
  <GIcon :icon="GIconCopy" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCopy</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconCross[0])">
  <GIcon :icon="GIconCross" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconCross</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDanger[0])">
  <GIcon :icon="GIconDanger" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDanger</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDelete[0])">
  <GIcon :icon="GIconDelete" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDelete</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDocument[0])">
  <GIcon :icon="GIconDocument" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDocument</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDocumentCheck[0])">
  <GIcon :icon="GIconDocumentCheck" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDocumentCheck</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDownload[0])">
  <GIcon :icon="GIconDownload" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDownload</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownDown[0])">
  <GIcon :icon="GIconDrodpownDown" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownDown</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownLeft[0])">
  <GIcon :icon="GIconDrodpownLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownRight[0])">
  <GIcon :icon="GIconDrodpownRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownDown[0])">
  <GIcon :icon="GIconDrodpownDown" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownDown</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownLeft[0])">
  <GIcon :icon="GIconDrodpownLeft" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownLeft</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownRight[0])">
  <GIcon :icon="GIconDrodpownRight" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownRight</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconDrodpownUp[0])">
  <GIcon :icon="GIconDrodpownUp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconDrodpownUp</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconEdit[0])">
  <GIcon :icon="GIconEdit" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconEdit</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconEditPIN[0])">
  <GIcon :icon="GIconEditPIN" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconEditPIN</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconEditPassword[0])">
  <GIcon :icon="GIconEditPassword" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconEditPassword</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconEye[0])">
  <GIcon :icon="GIconEye" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconEye</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconEyeSlash[0])">
  <GIcon :icon="GIconEyeSlash" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconEyeSlash</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconFilter[0])">
  <GIcon :icon="GIconFilter" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconFilter</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconFitToWidth[0])">
  <GIcon :icon="GIconFitToWidth" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconFitToWidth</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconFlag[0])">
  <GIcon :icon="GIconFlag" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconFlag</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconFlagEngland[0])">
  <GIcon :icon="GIconFlagEngland" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconFlagEngland</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconFlagIndonesia[0])">
  <GIcon :icon="GIconFlagIndonesia" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconFlagIndonesia</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconForgetPIN[0])">
  <GIcon :icon="GIconForgetPIN" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconForgetPIN</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconGadaiEmas[0])">
  <GIcon :icon="GIconGadaiEmas" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconGadaiEmas</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconGCash[0])">
  <GIcon :icon="GIconGCash" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconGCash</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconGCashColored[0])">
  <GIcon :icon="GIconGCashColored" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconGCashColored</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconGPoint[0])">
  <GIcon :icon="GIconGPoint" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconGPoint</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconGPointColored[0])">
  <GIcon :icon="GIconGPointColored" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconGPointColored</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconHelp[0])">
  <GIcon :icon="GIconHelp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconHelp</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconIDCard[0])">
  <GIcon :icon="GIconIDCard" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconIDCard</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconIDCardAdd[0])">
  <GIcon :icon="GIconIDCardAdd" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconIDCardAdd</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconImage[0])">
  <GIcon :icon="GIconImage" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconImage</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconImageAdd[0])">
  <GIcon :icon="GIconImageAdd" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconImageAdd</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconInfo[0])">
  <GIcon :icon="GIconInfo" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconInfo</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLink[0])">
  <GIcon :icon="GIconLink" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLink</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLinkSlash[0])">
  <GIcon :icon="GIconLinkSlash" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLinkSlash</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconList[0])">
  <GIcon :icon="GIconList" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconList</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLocation[0])">
  <GIcon :icon="GIconLocation" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLocation</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLocationOutlet[0])">
  <GIcon :icon="GIconLocationOutlet" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLocationOutlet</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLocationPinPoint[0])">
  <GIcon :icon="GIconLocationPinPoint" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLocationPinPoint</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLock[0])">
  <GIcon :icon="GIconLock" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLock</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconLogout[0])">
  <GIcon :icon="GIconLogout" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconLogout</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMail[0])">
  <GIcon :icon="GIconMail" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMail</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMaximize[0])">
  <GIcon :icon="GIconMaximize" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMaximize</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMenu[0])">
  <GIcon :icon="GIconMenu" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMenu</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMessage[0])">
  <GIcon :icon="GIconMessage" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMessage</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMetodePembayaran[0])">
  <GIcon :icon="GIconMetodePembayaran" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMetodePembayaran</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMicrophone[0])">
  <GIcon :icon="GIconMicrophone" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMicrophone</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMinimize[0])">
  <GIcon :icon="GIconMinimize" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMinimize</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMinus[0])">
  <GIcon :icon="GIconMinus" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMinus</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMinusRound[0])">
  <GIcon :icon="GIconMinusRound" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMinusRound</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconMoney[0])">
  <GIcon :icon="GIconMoney" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconMoney</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconNPWP[0])">
  <GIcon :icon="GIconNPWP" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconNPWP</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconOffice[0])">
  <GIcon :icon="GIconOffice" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconOffice</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconOnGoingCall[0])">
  <GIcon :icon="GIconOnGoingCall" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconOnGoingCall</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconOtherHorizontal[0])">
  <GIcon :icon="GIconOtherHorizontal" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconOtherHorizontal</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconOtherSquare[0])">
  <GIcon :icon="GIconOtherSquare" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconOtherSquare</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconOtherVertical[0])">
  <GIcon :icon="GIconOtherVertical" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconOtherVertical</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconPegadaianCircle[0])">
  <GIcon :icon="GIconPegadaianCircle" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPegadaianCircle</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconPercentage[0])">
  <GIcon :icon="GIconPercentage" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPercentage</div>
</div>

<div class="icon-container" v-on:click="getTextCopy(GIconPieChart[0])">
  <GIcon :icon="GIconPieChart" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPieChart</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPin[0])">
  <GIcon :icon="GIconPin" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPin</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPlus[0])">
  <GIcon :icon="GIconPlus" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPlus</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPlusRound[0])">
  <GIcon :icon="GIconPlusRound" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPlusRound</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPremium[0])">
  <GIcon :icon="GIconPremium" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPremium</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPrice[0])">
  <GIcon :icon="GIconPrice" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPrice</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPriceInfo[0])">
  <GIcon :icon="GIconPriceInfo" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPriceInfo</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconPrint[0])">
  <GIcon :icon="GIconPrint" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconPrint</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconProfile[0])">
  <GIcon :icon="GIconProfile" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconProfile</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconProfileAvatar[0])">
  <GIcon :icon="GIconProfileAvatar" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconProfileAvatar</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconProfileRisk[0])">
  <GIcon :icon="GIconProfileRisk" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconProfileRisk</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconQRCode[0])">
  <GIcon :icon="GIconQRCode" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconQRCode</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconRefresh[0])">
  <GIcon :icon="GIconRefresh" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconRefresh</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconReply[0])">
  <GIcon :icon="GIconReply" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconReply</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconReverse[0])">
  <GIcon :icon="GIconReverse" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconReverse</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconRoundText[0])">
  <GIcon :icon="GIconRoundText" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconRoundText</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSearch[0])">
  <GIcon :icon="GIconSearch" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSearch</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSend[0])">
  <GIcon :icon="GIconSend" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSend</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSetting[0])">
  <GIcon :icon="GIconSetting" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSetting</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShare[0])">
  <GIcon :icon="GIconShare" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShare</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareEmail[0])">
  <GIcon :icon="GIconShareEmail" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareEmail</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareFacebook[0])">
  <GIcon :icon="GIconShareFacebook" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareFacebook</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareInstagram[0])">
  <GIcon :icon="GIconShareInstagram" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareInstagram</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareLinkedin[0])">
  <GIcon :icon="GIconShareLinkedin" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareLinkedin</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSharePinterest[0])">
  <GIcon :icon="GIconSharePinterest" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSharePinterest</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareTwitter[0])">
  <GIcon :icon="GIconShareTwitter" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareTwitter</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareWhatsapp[0])">
  <GIcon :icon="GIconShareWhatsapp" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareWhatsapp</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconShareYoutube[0])">
  <GIcon :icon="GIconShareYoutube" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconShareYoutube</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSID[0])">
  <GIcon :icon="GIconSID" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSID</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSort[0])">
  <GIcon :icon="GIconSort" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSort</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSoundHigh[0])">
  <GIcon :icon="GIconSoundHigh" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSoundHigh</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSoundLow[0])">
  <GIcon :icon="GIconSoundLow" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSoundLow</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSoundMute[0])">
  <GIcon :icon="GIconSoundMute" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSoundMute</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconStar[0])">
  <GIcon :icon="GIconStar" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconStar</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconStarRound[0])">
  <GIcon :icon="GIconStarRound" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconStarRound</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconSwitch[0])">
  <GIcon :icon="GIconSwitch" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconSwitch</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconTabEmas[0])">
  <GIcon :icon="GIconTabEmas" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconTabEmas</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconTalk[0])">
  <GIcon :icon="GIconTalk" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconTalk</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconTime[0])">
  <GIcon :icon="GIconTime" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconTime</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconTimer[0])">
  <GIcon :icon="GIconTimer" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconTimer</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconTransaction[0])">
  <GIcon :icon="GIconTransaction" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconTransaction</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconUpload[0])">
  <GIcon :icon="GIconUpload" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconUpload</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconUserAdd[0])">
  <GIcon :icon="GIconUserAdd" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconUserAdd</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconUserDelete[0])">
  <GIcon :icon="GIconUserDelete" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconUserDelete</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconVoucher[0])">
  <GIcon :icon="GIconVoucher" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconVoucher</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconWoman[0])">
  <GIcon :icon="GIconWoman" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconWoman</div>
</div>
<div class="icon-container" v-on:click="getTextCopy(GIconWorld[0])">
  <GIcon :icon="GIconWorld" size="md" color="text-primary" weight="outline" />
  <div class="icon-text">GIconWorld</div>
</div>

    </div>



</template>

<style scoped>

.bodywrap {
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  grid-gap: 20px; 
  justify-content: center; 
}
.icon-text {
  display: flex;
  word-break: break-word; 
  align-items: center; 
  text-align: center;
}


.icon-container {
  font-family:Arial, Helvetica, sans-serif;
  font-size: 12px;
  display: flex;
  width: 90%;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #ebebeb;
  border-radius: 8px; 
  box-shadow: 0 4px 6px #ebebeb; 
  padding: 12px; 
  background-color: white;
}

.icon-container:hover{
  background-color: #f6f6f6;
  cursor: pointer;
}

.icon-container:active{
  background-color: #e7e7e7;
}


.g-icon{
  color: green;
}

.g-icon-lg{
  width:64px;
  height:64px;
}

.g-icon-sm{
  width:20px;
  height:20px;
}

.g-icon-md{
  width:24px;
  height:24px;
}

.text-primary{
  color: limegreen;
}

.text-secondary{
  color: yellow;
}

</style>