# Conway-s-Game-of-Life-Group-1-
SDV503 group 1 class assignment
 Rules: 

 1. If a live cells surroundings (out of 8) have < 2 alive cells, it dies

 2. If a live cells surroundings (out of 8) have two or three alive cells, it remains alive

 3. If a live cells surroundings (out of 8) have more than three cells, it dies

 4. If a dead cell has exactly three live neighbours, it comes alive. 

 A cell (array place) is either populated or not populated
     populated = 1
 not populated = 0
 10 by 10 grid minimum

 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []],
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []], 
 [[], [], [], [], [], [], [], [], [], []],
 [[], [], [], [], [], [], [], [], [], []],

 Readline: input places a "1" in desired place

 Then applies the 4 rules

 Find 8 neighbours

