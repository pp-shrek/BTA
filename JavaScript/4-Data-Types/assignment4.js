const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y : 11, hitpoints: 90 };
const damage = 15;

const treeHitpoints = tree.hitpoints;

{
    let treeHitpointsLeft;
    let rockHitpointsLeft;

    const rockHitpoints = rock.hitpoints;
    rockHitpointsLeft = rockHitpoints - damage;

    console.log("Rock hitpoints left: " + rockHitpointsLeft);

    {
        treeHitpointsLeft = treeHitpoints - damage;

        console.log("Tree hitpoints left: " + treeHitpointsLeft);
    }
}