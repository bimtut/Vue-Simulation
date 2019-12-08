<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">Component Communication</h1>
    <hr>

    <div class="lead">
      <div>Ini <code>yang dijelasin</code>. Terus ini pembahasannya :</div>

      <div class="text-muted">
        Communicating Events >> $emit >> pengeturan state/props dari parent ke child, dll. emit dari child bisa dianggap sebagai event listener pada parent. ketika emit dipanggil dari child, event listener dari parent menerima panggilan itu dan mengeksekusi value dari emit yang ada pada parent. vales bisa berupa inline method atau juga method beneran. pada emit yang di parent, parameter pertama berupa nama method, yang kedua berupa argumen untuk diproses.. pada anak pake $emit, pada parent pake @ karena pada parent, emit dari anak bisa dianggap sbg event listener

      </div>

      <hr>
      <div>Ini <code>yang dijelasin</code>. Terus ini pembahasannya :</div>

      <div class="text-muted">
        Jadi gini loh <code>&lt;nah ini kalo pake tanda kurung lancip&gt;</code>. terus ya gitu gitu gitu deh ya <code>iye iye </code> nah ya gitu dong mantab !!!
      </div>
    </div>
  </div>
</template>

