let Guest_List :string[] = ['Kamran Tessori','Zia Khan','Daniyal.Nagori'];

let absent_Guest :string = 'Kamran Tessori';

let new_Guest :string = 'Qasim';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is my pleasure to invite you in my party.\n\nThank You !\n\n' )

}
console.log(`Mr. ${absent_Guest} is not coming to the party. `);

console.log('Good News! We find big table, so we inviting 3 new guests.')

Guest_List.unshift('Sir Alem');
Guest_List.splice(2 ,0 ,'Sir Mubbashir');
Guest_List.push('Jdc')

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in my party.\n\nThank You !\n\n')
}