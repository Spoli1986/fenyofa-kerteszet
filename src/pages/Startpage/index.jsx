import React from "react";
import StartpageImg from "../../assets/images/startpage_pic.jpg"

export default function Startpage() {

    return (
       <div class="flex justify-center items-start">
          <div class="flex flex-col items-center md:h-2/3 md:w-2/3">
            <p class="p-6 bg-gray-100">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus, nisl eu finibus vehicula, tortor urna placerat justo, sit amet consequat arcu urna et massa. Vivamus pharetra feugiat lorem, et congue tellus vehicula nec. Praesent facilisis rutrum velit interdum ultricies. Nulla sit amet urna in est lobortis lobortis ut et sem. Pellentesque neque massa, lacinia et suscipit id, consequat id nunc. Donec dapibus cursus dolor, eget tristique tortor congue in. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum libero luctus nulla mattis imperdiet. Duis suscipit erat eu lorem tempor, eu molestie dolor aliquet. Aenean sit amet odio id neque accumsan mollis sit amet quis magna. Maecenas fringilla arcu lectus, vitae tempus risus euismod non. Suspendisse potenti. Duis est felis, ultrices egestas semper vitae, aliquet id magna. Praesent tristique et nunc eget eleifend. Etiam venenatis quis mi id egestas.
               Etiam scelerisque porttitor sem ac porta. In sit amet turpis eu mauris finibus consectetur. Vivamus volutpat dictum hendrerit. Quisque aliquam volutpat varius. Donec faucibus, dui sed accumsan interdum, diam urna maximus nisi, sit amet imperdiet tellus nibh sed mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies non neque at finibus. Pellentesque augue sapien, pellentesque eu lacinia sed, bibendum at urna. Curabitur ac molestie est. Phasellus id eros vitae urna aliquam feugiat vel eu urna. Duis lorem erat, accumsan ac tempus quis, vestibulum id nisl. Duis in diam et augue semper accumsan vitae eu ligula. Praesent interdum felis ut tortor vulputate, eget ornare lorem placerat. Ut condimentum elit eu sodales malesuada. Suspendisse egestas est tortor, ut dictum justo cursus quis.
               Cras iaculis finibus scelerisque. Phasellus non mattis nunc, sed placerat arcu. Sed molestie gravida ex non placerat. Cras convallis justo a eleifend efficitur. Fusce vestibulum dui ac nunc egestas, sollicitudin maximus eros eleifend. Aliquam nibh massa, aliquam sit amet venenatis in, sollicitudin a elit. Praesent hendrerit, turpis vitae interdum eleifend, nisl sem tincidunt augue, ut consectetur lorem massa eu dui. Sed tincidunt iaculis aliquet. Duis imperdiet ipsum et egestas mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum velit massa, id sagittis augue accumsan in. Pellentesque interdum dolor at enim varius, eget sollicitudin lectus lacinia. Maecenas varius fermentum dapibus. Duis nec augue laoreet, suscipit magna ac, pretium velit. In sed justo in tortor blandit porttitor a ac eros. Suspendisse consectetur eu eros at THE END.
            </p>
            <img src={StartpageImg} alt="startpage pinetree" class="" />
          </div>
       </div>
    )
}