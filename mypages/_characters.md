---
layout: default
title: 角色列表
permalink: /characters/
paginate: 16
paginate_path: "/characters/page:num/"
---
<!-- 本文件理论上不需要修改，添加和删除角色进行如下操作： -->
<!-- 1. 在 _data/characters.yml 文件中添加或修改角色数据 -->
<!-- 2. 在 /_mypages/characters/ 目录下创建对应角色的 .md 文件 -->

# 角色列表

<div class="characters">
  {% for character in site.data.characters %}
    <div class="character-item">
      <a href="{{ character.url }}">
      <!-- 为图片添加 rounded-circle 类来使头像变圆形 -->
        <img src="{{ character.avatar }}" alt="{{ character.name }}" class="character-avatar rounded-circle" width="200px" height="200px">
        <div class="character-info">
          <span class="character-id">编号：{{ character.id }}</span>
          <h3>{{ character.name }}</h3>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="prev">上一页</a>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">下一页</a>
  {% endif %}
</div>