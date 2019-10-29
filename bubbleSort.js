console.log("bubble sort is active");

//algoritma bubble sort adalah algoritma pengurutan data dengan membandingkan semua data yang tersimpan dalam array satu PermissionStatus, kemudian menggeser setiap kali nilai yang paling besar ke kanan

class BubbleSorting {
  datas = [1, 4, 2, 6, 8, 3, 10, 9];
  bubble = function() {
    let i = 0; //baris
    let j = 0; //kolom
    let n = this.datas.length;
    let tukar;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (this.datas[j] > this.datas[j + 1]) {
          tukar = this.datas[j];
          this.datas[j] = this.datas[j + 1];
          this.datas[j + 1] = tukar;
        }
      }
    }
  };
}
let algoritma = new BubbleSorting();
console.log(algoritma.datas);
algoritma.bubble();
console.log(algoritma.datas);
