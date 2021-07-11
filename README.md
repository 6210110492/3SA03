#### 3SA03 React
#### นาย ธนวัฒน์ โสภาพ 6210110492 section 01

### 7. งำนหลังกำรทดลอง

## 1.เพิ่มคำศัพท์

ใช้คำสั่ง 
const Fruit = ["Apple","Banana","Coconut","Durian"];<br />
const Animal = ["Ant","Brid","Cat","Dog"];<br />
const Vegetable = ["Acacia","Basil","Chilli","Dill"];<br />
และแบ่งหมวดหมู่ไว้

## 2.สุ่มคำศัพท์

ใช้คำสั่ง
const randomFruit = Fruit[Math.floor(Math.random()*Fruit.length)]; <br />
const randomAnimal = Animal[Math.floor(Math.random()*Animal.length)];<br />
const randomVegetable = Vegetable[Math.floor(Math.random()*Vegetable.length)];<br />
เพื่อสุ่มคำศัพท์แต่ละหมวดหมู่

## 3.สร้างหัวข้อที่จะแสดงผลแต่ละหมวดหมู่


## 4.สร้างปุ่ม Restart

ใช้คำสั่ง <button> onClick={newgame}>Restart </button>

## 5.เปลี่ยน output  ใน WordCard.js

แก้คำสั่งในบรรทัดที่ 29 และ 32 จาก console.log() เป็น window.alert()
