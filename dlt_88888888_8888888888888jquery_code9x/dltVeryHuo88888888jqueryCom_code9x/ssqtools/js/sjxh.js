  var isCorrect=false;
  var isTrue=false;
  var lianha=false;
  var iMilliSeconds=800;
  var iAt=0;
  var iMax=8;
  var numberStr=null;
  var aryNo=null;
  var breaki=0;
  var number_hz=0;
  var blue=0; 
  
  var not_BH2=document.getElementById('not_BH2');
  var not_BH1=document.getElementById('not_BH1'); 
  var BH2=document.getElementById('BH2');   
  var BH1=document.getElementById('BH1');    
  var divAC=document.getElementById('divAC');
  var divBlue=document.getElementById('divBlue');
  var divToDo=document.getElementById('divToDo');
  var divNo_0=document.getElementById('divNo_0');
  var divNo_1=document.getElementById('divNo_1');
  var divNo_2=document.getElementById('divNo_2');
  var divNo_3=document.getElementById('divNo_3');
  var divNo_4=document.getElementById('divNo_4');
  var divNo_5=document.getElementById('divNo_5');
                     
var divNo_6=document.getElementById('divNo_6');


var divNo_7=document.getElementById('divNo_7');

                 var divHZ=document.getElementById('divHZ');
  var B_is=document.getElementById('B_is');
  var B_is_J=document.getElementById('B_is_J');
  var B_is_D=document.getElementById('B_is_D');
  var JO=document.getElementById('JO');
  var DX=document.getElementById('DX');
  var searchStart=document.getElementById('searchStart');
  var searchEnd=document.getElementById('searchEnd');
  var lianhao=document.getElementById('lianhao');
  //divToDo.innerHTML="��ѡ��ִ���������������̫���̣�Ҫ�ȴ�һ����Խϳ���ʱ�䡣"
  divNo_0.innerHTML=""
  divNo_1.innerHTML=""
  divNo_2.innerHTML=""
  divNo_3.innerHTML=""
  divNo_4.innerHTML=""
  divNo_5.innerHTML=""
   divNo_6.innerHTML=""     
   divNo_7.innerHTML=""

                  divHZ.innerHTML=""
  var ary1=new Array(7);
  ary1[0]=21;ary1[1]=32;ary1[2]=45;ary1[3]=60;ary1[4]=77;ary1[5]=96;ary1[6]=117;
  var ary2=new Array(7);
  ary2[0]=81;ary2[1]=103;ary2[2]=123;ary2[3]=140;ary2[4]=157;ary2[5]=171;ary2[6]=183;
  
function getAll(){
   clearAll()

    //��������
  
  var b_jo_sj=false
  var b_jo=true
  var b_dx_sj=false
  var b_dx=true
  if(B_is.value==100){//����������ǲ����ĺ������
     b_jo_sj=true;
     b_dx_sj=true;
  
  }else{
      b_jo_sj=false;
      b_dx_sj=false;
  }

  if(B_is_J.value==2){
          b_jo_sj=true;
          b_jo=true;
   }
      
  if(B_is_J.value==1){
          b_jo_sj=true;
          b_jo=false;
      }      
   if(B_is_J.value==0){
          b_jo_sj=false;
          b_jo=false;
      }          
   if(B_is_D.value==2){
          b_dx_sj=true;
          b_dx=true;
       }
   if(B_is_D.value==1){
          b_dx_sj=true;
          b_dx=false;
   }
   if(B_is_D.value==0){
          b_dx_sj=false;
          b_dx=false;
   }
      
  if(B_is.value==100){//����������ǲ����ĺ������         
     blue =getBlur(b_jo_sj,b_jo,b_dx_sj,b_dx);
  }else{
     blue=B_is.value;
  }
  if(blue<10){
    blue="0"+blue
        //alert(blue)
  }      
  
   var jo_=JO.value;
   var jo_sj=false; 
   if(jo_!=100){ jo_sj=true; }             
   var dx_=DX.value;
   var dx_sj=false;
   if(dx_!=100){dx_sj=true;}      
  //�жϷ�Χ
   var fw_x=searchStart.value;       
   var fw_d=searchEnd.value;
   if(fw_x==""){
      fw_x=41;
   }
   if(fw_d==""){
      fw_d=300;
   }
   var fw_sj=false;
   if(!isNum(fw_x)||!isNum(fw_d)){          
     alert("������Ϸ��ķ�Χ��");
     return false;
  }
   if(fw_x!=41||fw_d!=300){
      fw_sj=true;
   }
   if(fw_x<41||fw_d<41){
    alert("��С��Χ���ܱ�41С��");
    return false;
   }
   if(fw_d>300||fw_x>300){
     alert("���Χ���ܱ�300��");
     return false;
   }
   if(fw_sj&&dx_!=100&&checkDX_fw(dx_,fw_x,fw_d)){       
      return false;
   }
        
   //�ж�����
  var lh_sj=false;
  var lh_;
  for(var i=0;i<2;i++){
    if(document.getElementById("lianhao"+i).checked==true){
        lh_=document.getElementById("lianhao"+i).value;
    }
    
   }       
   if(lh_==2){
      lh_sj=false;         
   }else{
      lh_sj=true;
      if(lh_==0){             
        lianha=true;
      }else{
         lianha=false;            
         }
   }

   //��������
   var bh_1=new Array();
   var bh1_=BH1.value;
   var bh2_=BH2.value;
   var bh_sj=false;
   if(bh1_!=100||bh2_!=100){
      bh_sj=true;
   }
    if((bh1_!=100&&bh2_!=100)&&(bh1_==bh2_)){
      alert("��һע�����в��ܳ���������ͬ������");
      return false;
   }
   if(bh1_!=100&&bh2_!=100){
      bh_1=new Array(2);
      bh_1[0]=bh1_;
      bh_1[1]=bh2_;
   }
   if(bh1_!=100&&bh2_==100){
     bh_1=new Array(1);
      bh_1[0]=bh1_;
   }
   if(bh2_!=100&&bh1_==100){
     bh_1=new Array(1);
      bh_1[0]=bh2_;
   }
   
   //�ж��Ƿ������Ƿ�Ͱ�����ͻ 
if(lh_sj&&(!lianha)&&bh_sj&&(bh_1.length>1)){     
  if((bh_1[0]==(bh_1[1]-1))){
   alert("���������г�������������������");
   return false;
 }
  if((bh_1[1]==(bh_1[0]-1))){
   alert("���������г�������������������");
   return false;
 }

}
   //����������
   var bh_2=new Array();
   var notbh1_=not_BH1.value;
   var notbh2_=not_BH2.value;
   var notbh_sj=false;
   if(notbh1_!=100||notbh2_!=100){
      notbh_sj=true;
   }
   if(notbh1_!=100&&notbh2_!=100){
      bh_2=new Array(2);
      bh_2[0]=notbh1_;
      bh_2[1]=notbh2_;       
   }
   if(notbh1_!=100&&notbh2_==100){
      bh_2=new Array(1);
      bh_2[0]=notbh1_;       
   }
    if(notbh1_==100&&notbh2_!=100){
      bh_2=new Array(1);
      bh_2[0]=notbh2_;       
   }
//�ж�jo��dx
if(bh_sj){
//jo_
var k=0;
var kd=0;
for(i=0;i<bh_1.length;i++){
   if(bh_1[i]%2==0){
     k++;
   }
   if(bh_1[i]>12){
     kd++;
   }
}
if(k>jo_){
 alert("�������ź����е���ż������������ż��ì��!")
 return false;
}
if(kd>dx_){
 alert("�������ź����еĴ�С������������С��ì��!")
 return false;
}
k=0;kd=0;
}

//�жϰ����벻�����Ƿ��ͻ
 if(bh_sj&&notbh_sj){
     for(i=0;i<bh_1.length;i++){
        for(j=0;j<bh_2.length;j++){
           if(bh_1[i]==bh_2[j]){
             alert("�ڰ����Ͳ����������У�����ͬ�ĺ���"+bh_1[i]+",���ǲ�����ģ�");
             return false;
           }
        }         
     }        
}
   //����������
aryNo=getRandom(36,8);
//var isCorrect=checkAll(aryNo,fw_sj,fw_x,fw_d,bh_sj,bh_1,notbh_sj,bh_2,jo_sj,jo_,dx_sj,dx_,34,35,lh_sj,lianha);
divToDo.style.display="";
divToDo.innerHTML="<font size=4 color=red><b>������ѡ��ִ��������</b></font>"
 
isCorrect=checkAll(aryNo,fw_sj,fw_x,fw_d,bh_sj,bh_1,notbh_sj,bh_2,jo_sj,jo_,dx_sj,dx_,34,35,lh_sj,lianha);


while(!isCorrect){    
  aryNo=getRandom(36,8);  
  isCorrect=checkAll(aryNo,fw_sj,fw_x,fw_d,bh_sj,bh_1,notbh_sj,bh_2,jo_sj,jo_,dx_sj,dx_,34,35,lh_sj,lianha);
  if(breaki++>200000){
     isTrue=true;    
     break;
  }
}
  numberStr=aryPX(aryNo);
  genNo();
} 
function clearAll(){       
   isCorrect=false;
   isTrue=false;
   iAt=0;
   blue=0;
   iMax=8;
   numberStr=null;
   aryNo=null;
   divToDo.innerHTML="��ѡ��ִ��������"
   divNo_0.innerHTML=""
   divNo_1.innerHTML=""
   divNo_2.innerHTML=""
   divNo_3.innerHTML=""
   divNo_4.innerHTML=""
   divNo_5.innerHTML=""
   divNo_6.innerHTML=""

   divNo_7.innerHTML=""


   divHZ.innerHTML=""
   divBlue.innerHTML=""
   breaki=0;
   number_hz=0;
   lianha=false;
   divAC.innerText="";
}
function genNo(){       
 divToDo.style.display="none";
 if(isTrue){
divToDo.style.display="";
divToDo.innerHTML="<font size=3>�޴������ĳ�����ϣ�������ѡ��������</font>"
 }else{
     number= numberStr[iAt++];
     number_hz+=number;
     if(number<10){
      numberdiv="0"+number;
     }else{
      numberdiv=""+number;
     }
     divToDo.innerHTML="";
//         divToDo.innerHTML="���ڲ���<font color=\"#ff0000\"> ���� </font>��<font color=\"#ff0000\"><b> "+iAt+" </b></font>������..."
//         divNo.innerHTML+="<img src=\"/gj/ssqjyss/"+numberdiv+".gif\"  vspace=\"8\">"
     if(iAt==1)
     {
     divNo_0.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_0.style.display = "block";
     }
     if(iAt==2)
     {
     divNo_1.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_1.style.display = "block";
     }
     if(iAt==3)
     {
     divNo_2.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_2.style.display = "block";
     }
     if(iAt==4)
     {
     divNo_3.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_3.style.display = "block";
     }
     if(iAt==5)
     {
     divNo_4.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_4.style.display = "block";
     }
     if(iAt==6)
     {
     divNo_5.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_5.style.display = "block";
     }
 
if(iAt==7)
     {
     divNo_6.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_6.style.display = "block";
     }

  if(iAt==8)
     {
     divNo_7.innerHTML+="<div class=\"redbutton\">"+numberdiv+"</div>";
     divNo_7.style.display = "block";
     }



                                        if(iAt<iMax){        
    window.setTimeout(genNo,iMilliSeconds)
    }else{
    divBlue.innerHTML="<div class=\"bluebutton\">"+blue+"</div>"
    divBlue.style.display = "block";
//        divBlue.innerHTML="<img src=\"/gj/ssqjyss/l/"+blue+".gif\"  vspace=\"8\">"
    divHZ.innerHTML="&nbsp;&nbsp;�����ֵ��<font size='2' color='FF6600'><b>"+number_hz+"</b></font>";
    divHZ.style.display = "block";
//        divToDo.innerText="���������ϣ�"
    divAC.innerHTML="����ACֵ��<font size='2' color='FF6600'><b>"+getAC(numberStr)+"</b></font>";
    divAC.style.display = "block";
    }
 }
}

function getAllArry(){
aryNo=aryPX(getRandom(36,8));
for(var ii=0;ii<aryNo.length;ii++){
document.writeln(aryNo[ii]);
}
}
//����Ƿ�ȫ��Ϊ����
function isNum(str) {
  var len = 0;
  len = str.length;
  var i = 0;
  for( i=0; i< len; i++) {
      temp = str.substring(i,i+1);
      if (temp >="0" && temp<="9") {
          continue;
      }
      else {
          return false;
      }
  }
  return true;
}
//����С��Χ��ѡ��Ĵ�С�Ƿ�����ì��
function checkDX_fw(n,fw_x,fw_d){
      var num=0;
      var num2=0;
      num=ary1[n];
      num2=ary2[n];                         
      if((!checkQJ(fw_x,num,num2))&&(!checkQJ(fw_d,num,num2))){
       alert("����С����"+n+":"+(6-n)+"ʱ����Χֵֻ���� "+num+" -- "+num2+" ����!");
       return true;
      }          
    return false;  
}

//�жϷ�Χ�����Ƿ���a1��b1֮��,����true��ʾ�ڴ�����
function checkQJ(number1,a1,b1){
if(number1>=a1&&number1<=b1){
 return true;
}else{
 return false;
}

}

//�õ������
//k��ʾ�������Χ��n��ʾ�õ�����
function getRandom(k,n){
 ary=new Array(n);
for(var i=0;i<n;){
var tmp=Math.floor(Math.random()*(k-1))+1;  
if(checkCF(ary,tmp,i)){
ary[i++]=tmp;
}
}
return ary;
}
//�õ�һ���������,
function getBlur(jo_sj,jo,dx_sj,dx){
 var tmp;
 tmp=Math.round(Math.random()*35)+1;
 var isCorr=false;

 if(jo_sj&&dx_sj){//Ҫ������ż�ʹ�С
    if((getJ_O(tmp)==jo)&&(getD_X(tmp)==dx)){
      return tmp;
    }else{
        isCorr=true;
        while(isCorr){
           tmp=Math.round(Math.random()*35)+1;
           if((getJ_O(tmp)==jo)&&(getD_X(tmp)==dx)){
               isCorr=false;      
           }
         }
        return tmp;
    }
  }else if(!jo_sj&&dx_sj){//ֻҪ�����С
     if(getD_X(tmp)==dx){
      return tmp;
    }else{
      isCorr=true;
        while(isCorr){
           tmp=Math.round(Math.random()*35)+1;
           if(getD_X(tmp)==dx){
               isCorr=false;      
           }
         }
        return tmp;
    }

 }else if(jo_sj&&!dx_sj){//ֻҪ������ż
   if(getJ_O(tmp)==jo){
      return tmp;
    }else{
        isCorr=true;
        while(isCorr){
           tmp=Math.round(Math.random()*35)+1;
           if(getJ_O(tmp)==jo){
               isCorr=false;      
           }
         }
        return tmp;
    }
 }else{     
  return tmp;
 }

}
//�����ż
function getJ_O(s){
 if(s%2==0){
   return true;
 }else{
   return false;
 } 
}
//����С
function getD_X(s){
 if(s>=8){
  return true;
 }else{
  return false;
 }
}
//����Ƿ��ظ�
function checkCF(ary1,t,n){     
 for(var i=0;i<n;i++){
    if(ary1[i]==t){
      return false;        
    }
 }  
// document.writeln(t);
 return true;
}
//ð������
function aryPX(str){
   var number=0;
   var length=str.length;
  for(var i=0;i<length;i++){
      for(var j=length-1;j>i;j--){
            if(str[j]<str[j-1]){
              number  = str[j];
               str[j]  = str[j-1];
               str[j-1]= number;
              }
         }
   }
     return str;
}
//�����ż��
function checkJO(s,o){
  var number=0;
  var n=s.length;
    for(var i=0;i<n;i++){
       if(s[i]%2==0){
             number++;
       }
    }
if(number==o){         
     return true;
    }else{
       return false;
    }
}
//����ֵ�ķ�Χ
function checkHZ(s,xiao,da){
    var number=0;
     for(var i=0;i<s.length;i++){
          number=number+s[i];             
     }
     if((number>=xiao&&number<=da)||(number<=xiao&&number>=da)){          
      return true;
     }else{
      return false;
     }
}
//�������
function checkLH(s){   
  s=aryPX(s);
  for(var i=s.length-1;i>0;i--){
      if((s[i]-1==s[i-1])||(s[i]+1==s[i-1])){
        return true;
      }
  }    
return false;
}
//����С��
function checkDXB(s,dxb,midd){
      var number=0;
      var mid=midd/2;
      
      for(var i=0;i<s.length;i++){
              if(s[i]>mid){
               number++;
              }
            } 
 if(number==dxb){
       return true;
     }else{
       return false;
     }
}
//�Ƿ������Щ��,���������Щ������true
function checkIntInInts(s,yh){
      var length=yh.length;
      var number=0;
   for(var i=0;i<length;i++){
      for(var j=0;j<s.length;j++){
        if(yh[i]==s[j]){
          number++;
        }
      }
   }
if(number==length){
    return true;
   }else{
    return false;
   }
}
//���ܰ�����Щ��,���������Щ������true
function checkIntNotInInts(s,yh){
      var length=yh.length;
      var number=0;
      for( i=0;i<length;i++){
           for( j=0;j<s.length;j++){
                if(yh[i]==s[j]){
                 number++;
              }
              }
          }
          if(number>0){
             return false;
         }else{
                return true;
            }
}
//�����鷽�� 0���� 1��Χ��2������3��������4��ż�ȣ�5��С�ȣ�6����
function checkAll(s,fwY,xiao,da,bhY,yh1,bbhY,yh2,joY,o,dxbY,dxb,midd,lhY,lianha2){    

if(fwY){//�������ֵ��Χ
   if(!checkHZ(s,xiao,da))
    return false;
}
if(bhY){//���Ҫ�����
   if(!checkIntInInts(s,yh1))
    return false;
}
if(bbhY){//���Ҫ�󲻰���
    if(!checkIntNotInInts(s,yh2))
    return false;     
}
if(joY){//���Ҫ������ż��
    if(!checkJO(s,o))
    return false;
}
if(dxbY){//���Ҫ�����С��
    if(!checkDXB(s,dxb,midd))
    return false;  
}
if(lhY){//����Ҫ��    
   if(lianha2){//������          
      if(!checkLH(s))        
      return false;  
   }else{//��������           
      if(checkLH(s))          
      return false;          
   }             
}
return true;

}

//����AC













