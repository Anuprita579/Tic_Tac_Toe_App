// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, Pressable } from 'react-native';
import Icons from './components/Icons';

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner("");
    setGameState(new Array(9).fill("empty", 0, 9));
  }

  const checkIsWinner = () => {
    console.log({'check1':gameState[0],'check2':gameState[1],'check3':gameState[2]});
    if (gameState[0] === gameState[1] && gameState[0] === gameState[2] && gameState[0] !== "empty") {
      setGameWinner(`${gameState[0]} won the game`);
    }
    else if (gameState[3] === gameState[4] && gameState[3] === gameState[5] && gameState[3] !== "empty") {
      setGameWinner(`${gameState[3]} won the game`);
    }
    else if (gameState[6] === gameState[7] && gameState[6] === gameState[8] && gameState[6] !== "empty") {
      setGameWinner(`${gameState[6]} won the game`);
    }
    else if (gameState[0] === gameState[3] && gameState[0] === gameState[6] && gameState[0] !== "empty") {
      setGameWinner(`${gameState[0]} won the game`);
    }
    else if (gameState[1] === gameState[4] && gameState[1] === gameState[7] && gameState[1] !== "empty") {
      setGameWinner(`${gameState[1]} won the game`);
    }
    else if (gameState[2] === gameState[5] && gameState[2] === gameState[8] && gameState[2] !== "empty") {
      setGameWinner(`${gameState[2]} won the game`);
    }
    else if (gameState[0] === gameState[4] && gameState[0] === gameState[8] && gameState[0] !== "empty") {
      setGameWinner(`${gameState[0]} won the game`);
    }
    else if (gameState[2] === gameState[4] && gameState[2] === gameState[6] && gameState[2] !== "empty") {
      setGameWinner(`${gameState[2]} won the game`);
    }
    else if (!gameState.includes("empty", 0)) {
      setGameWinner("Draw game");
    }
  }

  const onChangeItem = (itemNumber) => {
    if (gameWinner || gameState[itemNumber] !== "empty") {
      return;
    }
    const newGameState = [...gameState];
    newGameState[itemNumber] = isCross ? 'cross' : 'circle';
    setGameState(newGameState);
    setIsCross(!isCross);

    checkIsWinner();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Tic Tac Toe</Text>
      {gameWinner ? (
        <View>
          <Text style={styles.playerTurn}>{gameWinner}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.playerTurn}>Player {isCross ? 'X' : 'O'}'s turn</Text>
        </View>
      )}
      <FlatList
        numColumns={3}
        data={gameState}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => onChangeItem(index)} style={styles.box}>
            <Icons style={styles.playerTurn} name={item} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.grid}
      />
      <Pressable onPress={reloadGame}>
        <Text style={styles.playerTurn}>{gameWinner ? "Start new game" : "Reload the game"}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    padding: 10,
    color: "black"
  },
  playerTurn: {
    textAlign: "center",
    backgroundColor: "orange",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    padding: 10,
  },
  grid: {
    margin: 10,
    padding: 10,
  },
  box: {
    padding: 10,
    margin: 10,
    backgroundColor: "black",
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

