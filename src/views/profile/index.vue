<script setup></script>
<template>
  <div class="py-10">
    <div class="">
      <header>
        <div class="info">
          <span class="text-4xl">张柯</span>
          <span class="px-2">个人简历</span>
          <span class="block pt-2">男 | 26 | 前端开发工程师 | 2年</span>
        </div>
        <div class="contact block pt-2 text-right">
          <div class="phone">
            <span class="text-base">☎ 183-3993-9706</span>
          </div>
          <div class="email">
            <span class="email block">✉ 413365742@qq.com</span>
          </div>
          <div class="email">
            <span class="email block">🤖 https://github.com/scattter</span>
          </div>
        </div>
      </header>
      <article>
        <div class="education mt-8">
          <span class="icon text-xl">🎓 毕业院校</span>
          <a-divider class="mt-4 bg-black" />
          <div class="edu-detail">
            <div class="edu-lasted mt-2 flex justify-between">
              <span class="font-medium">华中科技大学 &emsp;武汉</span>
              <span class="font-medium">2018 – 2020</span>
            </div>
            <span class="text-sm">电子信息与通信学院 &emsp;硕士研究生</span>
            <div class="edu-lasted mt-2 flex justify-between">
              <span class="font-medium">郑州轻工业大学 &emsp;郑州</span>
              <span class="font-medium">2014 – 2018</span>
            </div>
            <span class="text-sm">电子信息工程学院 &emsp;学士</span>
          </div>
        </div>
        <div class="skill mt-8">
          <span class="icon text-xl">⚙️ 技能</span>
          <a-divider class="mt-4 bg-black" />
          <div class="skill-detail mt-2 pl-2 text-sm">
            <li class="inline-block font-semibold">◾&ensp;编程语言:&emsp;</li>
            <span class="inline-block">Javascript</span>
          </div>
          <div class="skill-detail mt-2 pl-2 text-sm">
            <li class="inline-block font-semibold"
              >◾&ensp;前端框架相关:&emsp;</li
            >
            <span class="inline-block">Vue, React, Webpack</span>
          </div>
          <div class="skill-detail mt-2 pl-2 text-sm">
            <li class="inline-block font-semibold"
              >◾&ensp;技术探索相关:&emsp;</li
            >
            <span class="inline-block">Koa, Docker, Java, Rust, CI/CD等</span>
          </div>
          <div class="skill-detail mt-2 pl-2 text-sm">
            <li class="inline-block font-semibold">◾&ensp;英文:&emsp;</li>
            <span class="inline-block">CET-6, 日常英语听说</span>
          </div>
          <div class="skill-detail mt-2 pl-2 text-sm">
            <li class="inline-block font-semibold">◾&ensp;知识体系:&emsp;</li>
            <span class="inline-block">熟悉常用的数据结构和算法，敏捷开发</span>
          </div>
        </div>
        <div class="experience mt-8">
          <span class="text-xl">📝 工作经历</span>
          <a-divider class="mt-4 bg-black" />
          <div class="experience-lasted mt-2 flex justify-between">
            <span class="font-bold">ThoughtWorks</span>
            <span class="font-medium">2020.10 – 2021.4</span>
          </div>
          <div class="experience-detail text-sm pt-2">
            <span class="text-sm font-medium">工作项目：</span>
            <span class="font-semibold">Melco DCT team</span>
          </div>
          <div class="experience-detail text-sm pt-1">
            <span>项目概况：</span>
            <span class="inline-block pl-16 ml-1">
              ◾&ensp;该项目为澳门Melco公司所有，DCT
              team负责Melco后台Portal的业务开发，包括：Melco
              APP消息推送与后台管理，积分兑换与后台管理，
              优惠券发放与后台管理，Redemption优惠券核销APP开发与后台管理等。
              <br />
              ◾&ensp;由于项目涉及多个微服务，所以使用BFF进行管理，为前端提供定制化数据；使用CI/CD持续集成和持续交付。
            </span>
          </div>
          <div class="experience-detail text-sm pt-1">
            <span class="text-sm font-medium">工作职责：</span>
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;Web前端开发：页面跳转，页面开发，公共组件抽取</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;后端开发：数据库的增改删查，配合前端获取相应数据</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;IOS APP
              开发：页面跳转与警告窗弹出</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;团队工作：Showcase owner,
              Release owner, Session 分享</span
            >
          </div>
          <div class="experience-detail text-sm pt-1">
            <span class="text-sm font-medium">前端技术：</span>
            <span
              >React, Typescript, Redux, React Router, Webpack, Lodash, Antd,
              Enzyme, Jest</span
            >
          </div>
          <br />
          <div class="experience-lasted mt-2 flex justify-between">
            <span class="font-bold">中电云数智</span>
            <span class="font-medium">2021.5 – 至今</span>
          </div>
          <div class="experience-detail text-sm pt-2">
            <span class="text-sm font-medium">工作项目：</span>
            <span class="font-semibold">项目协作域</span>
          </div>
          <div class="experience-detail text-sm pt-1">
            <span>项目概况：</span>
            <span class="">
              该项目是公司自研敏捷工作平台(类似Jira)，前期集团内部研发使用，后期部署中国电子公有云正式商用。
            </span>
          </div>
          <div class="experience-detail text-sm pt-1">
            <span class="text-sm font-medium">项目角色：</span>
            <span>前端部分对接人</span>
            <br />
            <span class="text-sm font-medium">项目职责：</span>
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;负责项目前端部分进度</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;和产品经理后端对接需求,
              澄清业务与技术需求</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;项目前端需求录入与拆分、指派</span
            >
            <br />
            <span
              >&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;项目前端功能开发与调试环境搭建和版本发布</span
            >
          </div>
          <div class="experience-detail text-sm pt-1">
            <span class="text-sm font-medium">项目技术：</span>
            <span>Vue-admin, Echart, Element, Pnpm</span>
          </div>
          <div class="experience-detail text-sm pt-1">
            <span class="text-sm font-medium">团队工作：</span>
            <div class="ml-16 pl-2">
              <span class="block">◾&ensp;工作文档和技术文档的输出</span>
              <span class="block">◾&ensp;在团队组织知识分享</span>
              <span class="block">◾&ensp;React基础项目搭建</span>
              <span class="block">◾&ensp;其他杂项</span>
            </div>
          </div>
        </div>
      </article>
      <footer class="evaluate mt-8 pb-10">
        <span class="icon text-xl">&ensp;ℹ &ensp;自我评价</span>
        <a-divider class="mt-4 bg-black" />
        <span class="evaluate-detail text-sm"
          >&emsp;◾&ensp;对技术有自己的热情，乐于分享</span
        >
        <br />
        <span class="evaluate-detail text-sm"
          >&emsp;◾&ensp;有自我驱动力，乐观向上，有抗压能力</span
        >
        <br />
        <span class="evaluate-detail text-sm"
          >&emsp;◾&ensp;热爱运动：羽毛球、乒乓球</span
        >
      </footer>
    </div>
  </div>
</template>
