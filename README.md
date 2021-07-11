3SA03 React
นาย ธนวัฒน์ โสภาพ 6210110492 section 01

### 7. งำนหลังกำรทดลอง

## 1.เพิ่มคำศัพท์

ใช้คำสั่ง   const Fruit = ["Apple","Banana","Coconut","Durian"];
         const Animal = ["Ant","Brid","Cat","Dog"];
         const Vegetable = ["Acacia","Basil","Chilli","Dill"];
และแบ่งหมวดหมู่ไว้

## 2.สุ่มคำศัพท์

ใช้คำสั่ง   const randomFruit = Fruit[Math.floor(Math.random()*Fruit.length)];
         const randomAnimal = Animal[Math.floor(Math.random()*Animal.length)];
         const randomVegetable = Vegetable[Math.floor(Math.random()*Vegetable.length)];
เพื่อสุ่มคำศัพท์แต่ละหมวดหมู่

## 3.สร้างหัวข้อที่จะแสดงผลแต่ละหมวดหมู่

ใช้คำสั่ง  <header>
          <h1> React Game </h1>
        </header>
        <h2> Fruit </h2>
        <WordCard value={randomFruit}/>
        <h2> Animal </h2>
        <WordCard value={randomAnimal}/>
        <h2> Vegetable </h2>
        <WordCard value={randomVegetable}/>

## 4.สร้างปุ่ม Restart

ใช้คำสั่ง <button onClick={newgame}>Restart</button>

## 5.เปลี่ยน output  ใน WordCard.js

แก้คำสั่งในบรรทัดที่ 29 และ 32 จาก console.log() เป็น window.alert()
