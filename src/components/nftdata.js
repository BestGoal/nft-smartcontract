import Web3 from 'web3'
import nft  from  '../abi/nft.json'

const collectiondetails = async (id) =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.collectiondetails(id).call({from:userwalletaddresss})
        .then((fees)=>
        {
            console.log(",,aa",[fees]);      
        }).catch() 
        
        }
}

const nftinfo = async (id) =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.nftinformation(id).call({from:userwalletaddresss})
        .then((fees)=>
        {
            console.log(fees);      
        }).catch() 
        
        }
}

const usercollection = async (id) =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.userinfo(userwalletaddresss,id).call({from:userwalletaddresss})
        .then((value)=>
        {
            console.log(value);
            nftlist(value);   
            collectiondetails(value);
        })
        .catch() 
        
        }
}

const collectionnft = async (id,length) =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.collectionstored(id,length).call({from:userwalletaddresss})
        .then((fees)=>
        {
            console.log(fees);  
            nftinfo(fees);    
        }).catch() 
        
        }
}


export const collectionlist = async () =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.totalcollection(userwalletaddresss).call({from:userwalletaddresss})
        .then((length)=>
        {
            for (let i = 0; i<length;i++) 
            {
                usercollection(i);   
            }          
        })
        .catch() 
        
        }
}

const nftlist = async (id) =>
{   
        if (window.ethereum)
        {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //  console.log(accounts);
        let userwalletaddresss = accounts[0];
        window.web3 = new Web3(window.ethereum);
        let  swaping = new window.web3.eth.Contract(nft,'0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
        
        swaping.methods.totalnft(id).call({from:userwalletaddresss})
        .then((length)=>
        {
            for (let i = 0; i<length;i++) 
            {
                collectionnft(id,i);
            }          
        })
        .catch() 
        
        }
}