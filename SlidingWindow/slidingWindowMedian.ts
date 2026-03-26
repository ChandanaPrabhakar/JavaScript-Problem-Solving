// Sliding Window Median
class DualHeap {
  private small: number[] = [];
  private large: number[] = [];
  private smallSize: number = 0;
  private largeSize: number = 0;
  private delayed = new Map<number, number>();
  private k: number;
  constructor(k: number) {
    this.k = k;
  }

  //   --- Heap Helper ---
  private maxHeapPush(heap: number[], val: number) {
    heap.push(val);
    heap.sort((a, b) => b - a);
  }

  private minHeapPush(heap: number[], val: number) {
    heap.push(val);
    heap.sort((a, b) => a - b);
  }

  private prune(heap: number[]) {
    while (heap.length > 0) {
      let num = heap[0];
      if (this.delayed.has(num)) {
        this.delayed.set(num, this.delayed.get(num)! - 1);

        if (this.delayed.get(num) === 0) {
          this.delayed.delete(num);
        }
        heap.shift();
      } else {
        break;
      }
    }
  }

  private makeBalance() {
    if (this.smallSize > this.largeSize) {
      this.minHeapPush(this.large, this.small.shift()!);
      this.smallSize--;
      this.largeSize++;
      this.prune(this.small);
    } else if (this.smallSize < this.largeSize) {
      this.maxHeapPush(this.small, this.large.shift()!);
      this.smallSize++;
      this.largeSize--;
      this.prune(this.large);
    }
  }

  add(num: number) {
    if (this.small.length === 0 || num <= this.small[0]) {
      this.maxHeapPush(this.small, num);
      this.smallSize++;
    } else {
      this.minHeapPush(this.large, num);
      this.largeSize++;
    }
    this.makeBalance();
  }

  remove(num: number) {
    this.delayed.set(num, (this.delayed.get(num) || 0) + 1);

    if (num <= this.small[0]) {
      this.smallSize--;
      if (num === this.small[0]) this.prune(this.small);
    } else {
      this.largeSize--;
      if (num === this.large[0]) this.prune(this.large);
    }
    this.makeBalance();
  }

  getMedian(): number {
    if (this.k % 2 === 1) return this.small[0];
    return this.small[0] + this.large[0] / 2;
  }
}
export function slidingWindowMedian(nums: number[], k: number): number[] {
  const dh = new DualHeap(k);
  const result: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    dh.add(nums[index]);
    if (index >= k - 1) {
      result.push(dh.getMedian());
      dh.remove(nums[index - k + 1]);
    }
  }
  return result;
}
