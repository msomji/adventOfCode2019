let Intcode = require('./intcode.js');



describe("Intcode", () => {
  describe('day 2 tests', () => {
    it('should add things', () => {
      INPUT = [1,0,0,0,99]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program).toEqual([2,0,0,0,99])
    })
    it('should multiply things', () => {
      INPUT = [2,3,0,3,99]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program).toEqual([2,3,0,6,99])
    })
    it('should multiply things', () => {
      INPUT = [2,4,4,5,99,0]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program).toEqual([2,4,4,5,99,9801])
    })
    it('should multiply things', () => {
      INPUT = [1,1,1,4,99,5,6,0,99]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program).toEqual([30,1,1,4,2,5,6,0,99])
    })
    it('part1 test', () => {
      INPUT = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,1,6,23,27,1,10,27,31,1,5,31,35,2,6,35,39,1,5,39,43,1,5,43,47,2,47,6,51,1,51,5,55,1,13,55,59,2,9,59,63,1,5,63,67,2,67,9,71,1,5,71,75,2,10,75,79,1,6,79,83,1,13,83,87,1,10,87,91,1,91,5,95,2,95,10,99,2,9,99,103,1,103,6,107,1,107,10,111,2,111,10,115,1,115,6,119,2,119,9,123,1,123,6,127,2,127,10,131,1,131,6,135,2,6,135,139,1,139,5,143,1,9,143,147,1,13,147,151,1,2,151,155,1,10,155,0,99,2,14,0,0]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program[0]).toEqual(6087827)
    })
  })
  describe('day 5', () => {
    it('returns input', () => {
      INPUT = [3,0,4,0,99]
      subject = new Intcode(INPUT).process(45)
  
      expect(subject.solution).toEqual([45])
    })
    it('allows negative numbers', () => {
      INPUT = [1101,100,-1,4,0]
      subject = new Intcode(INPUT).process()
  
      expect(subject.program).toEqual([ 1101, 100, -1, 4, 99 ])
    })
    it('part 1 test', () => {
      INPUT = [3,225,1,225,6,6,1100,1,238,225,104,0,1101,91,67,225,1102,67,36,225,1102,21,90,225,2,13,48,224,101,-819,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1101,62,9,225,1,139,22,224,101,-166,224,224,4,224,1002,223,8,223,101,3,224,224,1,223,224,223,102,41,195,224,101,-2870,224,224,4,224,1002,223,8,223,101,1,224,224,1,224,223,223,1101,46,60,224,101,-106,224,224,4,224,1002,223,8,223,1001,224,2,224,1,224,223,223,1001,191,32,224,101,-87,224,224,4,224,102,8,223,223,1001,224,1,224,1,223,224,223,1101,76,90,225,1101,15,58,225,1102,45,42,224,101,-1890,224,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,101,62,143,224,101,-77,224,224,4,224,1002,223,8,223,1001,224,4,224,1,224,223,223,1101,55,54,225,1102,70,58,225,1002,17,80,224,101,-5360,224,224,4,224,102,8,223,223,1001,224,3,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1008,677,677,224,102,2,223,223,1005,224,329,1001,223,1,223,1108,677,226,224,1002,223,2,223,1006,224,344,101,1,223,223,107,677,226,224,1002,223,2,223,1006,224,359,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,374,1001,223,1,223,108,226,677,224,1002,223,2,223,1006,224,389,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,404,1001,223,1,223,1108,677,677,224,1002,223,2,223,1005,224,419,101,1,223,223,1008,226,677,224,102,2,223,223,1006,224,434,101,1,223,223,107,226,226,224,102,2,223,223,1005,224,449,1001,223,1,223,1007,677,677,224,1002,223,2,223,1006,224,464,1001,223,1,223,1007,226,226,224,1002,223,2,223,1005,224,479,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,494,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,509,101,1,223,223,1107,677,677,224,102,2,223,223,1005,224,524,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,539,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,554,101,1,223,223,1007,677,226,224,1002,223,2,223,1005,224,569,101,1,223,223,7,677,226,224,1002,223,2,223,1006,224,584,101,1,223,223,107,677,677,224,1002,223,2,223,1005,224,599,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,614,101,1,223,223,7,677,677,224,1002,223,2,223,1006,224,629,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,108,226,226,224,102,2,223,223,1005,224,659,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,674,101,1,223,223,4,223,99,226]
      subject = new Intcode(INPUT).process(1)

      expect(subject.solution).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 15508323 ])
    })
    describe('position mode' ,() => {
      describe('equal to', () => {
        it('should output 1 when input is 8', () => {
          INPUT = [3,9,8,9,10,9,4,9,99,-1,8]
          subject = new Intcode(INPUT).process(8)
  
          expect(subject.solution).toEqual([1])
        })
        it('should output 0 when input is not 8', () => {
          INPUT = [3,9,8,9,10,9,4,9,99,-1,8]
          subject = new Intcode(INPUT).process(80)
  
          expect(subject.solution).toEqual([0])
        })
      })
      describe('less than', () => {
        it('should output 1 when input is less than 8', () => {
          INPUT = [3,9,7,9,10,9,4,9,99,-1,8]
          subject = new Intcode(INPUT).process(3)
  
          expect(subject.solution).toEqual([1])
        })
        it('should output 0 when input greater than 8', () => {
          INPUT = [3,9,7,9,10,9,4,9,99,-1,8]
          subject = new Intcode(INPUT).process(80)
  
          expect(subject.solution).toEqual([0])
        })
      })
    })
    describe("immidiate mode", () => {
      describe('equal to', () => {
        it('should return 1 if input equal to 8', () => {
          INPUT = [3,3,1108,-1,8,3,4,3,99]
          subject = new Intcode(INPUT).process(8)
  
          expect(subject.solution).toEqual([1])
        })
        it('should return 0 if input not equal to 8', () => {
          INPUT = [3,3,1108,-1,8,3,4,3,99]
          subject = new Intcode(INPUT).process(89)
  
          expect(subject.solution).toEqual([0])
        })
      })
      describe('less than', () => {
        it('should return 1 if input less than 8', () => {
          INPUT = [3,3,1107,-1,8,3,4,3,99]
          subject = new Intcode(INPUT).process(7)
  
          expect(subject.solution).toEqual([1])
        })
        it('should return 0 if greater than 8', () => {
          INPUT = [3,3,1107,-1,8,3,4,3,99]
          subject = new Intcode(INPUT).process(89)
  
          expect(subject.solution).toEqual([0])
        })
      })
    })
    describe('jump tests', () => {
      describe('position mode', () => {
        it('shuold output 0 if input is 0 ', () => {
          INPUT = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9]
          subject = new Intcode(INPUT).process(0)
  
          expect(subject.solution).toEqual([0])
        })
        it('shuold output 1 if input is not 0 ', () => {
          INPUT = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9]
          subject = new Intcode(INPUT).process(1000)
  
          expect(subject.solution).toEqual([1])
        })
      })
      describe('immediate mode', () => {
        it('shuold output 0 if input is 0 ', () => {
          INPUT = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1]
          subject = new Intcode(INPUT).process(0)
  
          expect(subject.solution).toEqual([0])
        })
        it('shuold output 1 if input is not 0 ', () => {
          INPUT = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1]
          subject = new Intcode(INPUT).process(1000)
  
          expect(subject.solution).toEqual([1])
        })
        it('shuold output 999 if input is below 8 ', () => {
          INPUT = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]
          subject = new Intcode(INPUT).process(7)
  
          expect(subject.solution).toEqual([999])
        })
        it('shuold output 1000 if input is  8 ', () => {
          INPUT = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]
          subject = new Intcode(INPUT).process(8)
  
          expect(subject.solution).toEqual([1000])
        })
        it('shuold output 1001 if input is greater than  8 ', () => {
          INPUT = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]
          subject = new Intcode(INPUT).process(9)
  
          expect(subject.solution).toEqual([1001])
        })
        it('day 5 part 2 ', () => {
          INPUT = [3,225,1,225,6,6,1100,1,238,225,104,0,1101,91,67,225,1102,67,36,225,1102,21,90,225,2,13,48,224,101,-819,224,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1101,62,9,225,1,139,22,224,101,-166,224,224,4,224,1002,223,8,223,101,3,224,224,1,223,224,223,102,41,195,224,101,-2870,224,224,4,224,1002,223,8,223,101,1,224,224,1,224,223,223,1101,46,60,224,101,-106,224,224,4,224,1002,223,8,223,1001,224,2,224,1,224,223,223,1001,191,32,224,101,-87,224,224,4,224,102,8,223,223,1001,224,1,224,1,223,224,223,1101,76,90,225,1101,15,58,225,1102,45,42,224,101,-1890,224,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,101,62,143,224,101,-77,224,224,4,224,1002,223,8,223,1001,224,4,224,1,224,223,223,1101,55,54,225,1102,70,58,225,1002,17,80,224,101,-5360,224,224,4,224,102,8,223,223,1001,224,3,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1008,677,677,224,102,2,223,223,1005,224,329,1001,223,1,223,1108,677,226,224,1002,223,2,223,1006,224,344,101,1,223,223,107,677,226,224,1002,223,2,223,1006,224,359,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,374,1001,223,1,223,108,226,677,224,1002,223,2,223,1006,224,389,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,404,1001,223,1,223,1108,677,677,224,1002,223,2,223,1005,224,419,101,1,223,223,1008,226,677,224,102,2,223,223,1006,224,434,101,1,223,223,107,226,226,224,102,2,223,223,1005,224,449,1001,223,1,223,1007,677,677,224,1002,223,2,223,1006,224,464,1001,223,1,223,1007,226,226,224,1002,223,2,223,1005,224,479,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,494,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,509,101,1,223,223,1107,677,677,224,102,2,223,223,1005,224,524,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,539,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,554,101,1,223,223,1007,677,226,224,1002,223,2,223,1005,224,569,101,1,223,223,7,677,226,224,1002,223,2,223,1006,224,584,101,1,223,223,107,677,677,224,1002,223,2,223,1005,224,599,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,614,101,1,223,223,7,677,677,224,1002,223,2,223,1006,224,629,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,108,226,226,224,102,2,223,223,1005,224,659,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,674,101,1,223,223,4,223,99,226]
          subject = new Intcode(INPUT).process(5)
  
          expect(subject.solution).toEqual([9006327])
        })
      })
    })
  })

  describe('day 9', () => {
    xit('should return a copy of itself', () => {
      INPUT = [109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99]
      subject = new Intcode(INPUT).process()
      expect(subject.solution).toEqual([ 109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99 ])
    })
    // it('shouldoutput 16 digit num', () => {
    //   INPUT = [1102,34915192,34915192,7,4,7,99,0]
    //   subject = new Intcode(INPUT).process()
    //   expect(subject.solution[0].toString().length).toEqual(16)
    // })
    // it('shouldoutput the number in the middle', () => {
    //   INPUT = [104,1125899906842624,99]
    //   subject = new Intcode(INPUT).process()
    //   expect(subject.solution).toEqual([1125899906842624])
    // })
    // it('day 9 part 1', () => {
    //   INPUT = [1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1102,3,1,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,902,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1101,309,0,1024,1101,0,24,1002,1102,388,1,1029,1102,1,21,1019,1101,0,33,1015,1102,1,304,1025,1101,344,0,1027,1101,25,0,1003,1102,1,1,1021,1101,29,0,1012,1101,0,23,1005,1102,1,32,1007,1102,38,1,1000,1101,30,0,1016,1102,1,347,1026,1101,0,26,1010,1101,0,39,1004,1102,1,36,1011,1101,0,393,1028,1101,0,37,1013,1101,0,35,1008,1101,34,0,1001,1101,0,495,1022,1102,1,28,1018,1101,0,0,1020,1102,1,22,1006,1101,488,0,1023,1102,31,1,1009,1102,1,20,1017,1101,0,27,1014,109,10,21102,40,1,4,1008,1014,37,63,1005,63,205,1001,64,1,64,1106,0,207,4,187,1002,64,2,64,109,-18,1207,8,37,63,1005,63,227,1001,64,1,64,1106,0,229,4,213,1002,64,2,64,109,17,1207,-7,25,63,1005,63,247,4,235,1106,0,251,1001,64,1,64,1002,64,2,64,109,-8,1202,6,1,63,1008,63,29,63,1005,63,275,1001,64,1,64,1106,0,277,4,257,1002,64,2,64,109,25,1205,-6,293,1001,64,1,64,1105,1,295,4,283,1002,64,2,64,109,-4,2105,1,2,4,301,1106,0,313,1001,64,1,64,1002,64,2,64,109,-9,1208,-4,31,63,1005,63,335,4,319,1001,64,1,64,1105,1,335,1002,64,2,64,109,16,2106,0,-2,1106,0,353,4,341,1001,64,1,64,1002,64,2,64,109,-13,2102,1,-8,63,1008,63,38,63,1005,63,373,1105,1,379,4,359,1001,64,1,64,1002,64,2,64,109,9,2106,0,3,4,385,1105,1,397,1001,64,1,64,1002,64,2,64,109,-11,21107,41,42,0,1005,1014,415,4,403,1106,0,419,1001,64,1,64,1002,64,2,64,109,14,1206,-7,431,1106,0,437,4,425,1001,64,1,64,1002,64,2,64,109,-23,2107,37,-5,63,1005,63,455,4,443,1105,1,459,1001,64,1,64,1002,64,2,64,109,10,21107,42,41,-2,1005,1013,475,1105,1,481,4,465,1001,64,1,64,1002,64,2,64,2105,1,8,1001,64,1,64,1106,0,497,4,485,1002,64,2,64,109,-6,21108,43,41,8,1005,1017,517,1001,64,1,64,1106,0,519,4,503,1002,64,2,64,109,5,2101,0,-9,63,1008,63,23,63,1005,63,541,4,525,1106,0,545,1001,64,1,64,1002,64,2,64,109,-13,1201,5,0,63,1008,63,20,63,1005,63,565,1105,1,571,4,551,1001,64,1,64,1002,64,2,64,109,16,1205,4,589,4,577,1001,64,1,64,1106,0,589,1002,64,2,64,109,-16,1202,4,1,63,1008,63,23,63,1005,63,615,4,595,1001,64,1,64,1106,0,615,1002,64,2,64,109,1,2101,0,6,63,1008,63,33,63,1005,63,639,1001,64,1,64,1105,1,641,4,621,1002,64,2,64,109,8,21101,44,0,8,1008,1018,44,63,1005,63,667,4,647,1001,64,1,64,1105,1,667,1002,64,2,64,109,-7,1201,1,0,63,1008,63,39,63,1005,63,689,4,673,1106,0,693,1001,64,1,64,1002,64,2,64,109,7,2102,1,-8,63,1008,63,24,63,1005,63,715,4,699,1105,1,719,1001,64,1,64,1002,64,2,64,109,5,2108,34,-7,63,1005,63,739,1001,64,1,64,1105,1,741,4,725,1002,64,2,64,109,-22,2108,25,10,63,1005,63,763,4,747,1001,64,1,64,1106,0,763,1002,64,2,64,109,31,1206,-4,781,4,769,1001,64,1,64,1105,1,781,1002,64,2,64,109,-10,21101,45,0,5,1008,1019,47,63,1005,63,805,1001,64,1,64,1105,1,807,4,787,1002,64,2,64,109,2,21108,46,46,-3,1005,1013,825,4,813,1106,0,829,1001,64,1,64,1002,64,2,64,109,-22,2107,40,10,63,1005,63,845,1105,1,851,4,835,1001,64,1,64,1002,64,2,64,109,17,1208,-7,36,63,1005,63,871,1001,64,1,64,1105,1,873,4,857,1002,64,2,64,109,16,21102,47,1,-9,1008,1018,47,63,1005,63,899,4,879,1001,64,1,64,1106,0,899,4,64,99,21102,1,27,1,21101,0,913,0,1105,1,920,21201,1,39657,1,204,1,99,109,3,1207,-2,3,63,1005,63,962,21201,-2,-1,1,21102,1,940,0,1105,1,920,21201,1,0,-1,21201,-2,-3,1,21101,955,0,0,1105,1,920,22201,1,-1,-2,1106,0,966,21202,-2,1,-2,109,-3,2105,1,0]
    //   subject = new Intcode(INPUT).process(1)
    //   expect(subject.solution).toEqual([203,3])
    // })
  })
})