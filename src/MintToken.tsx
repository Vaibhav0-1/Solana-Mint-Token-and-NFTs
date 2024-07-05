import { clusterApiUrl, 
    Connection, 
    PublicKey, 
    Keypair, 
    LAMPORTS_PER_SOL, 
    Transaction, 
    sendAndConfirmTransaction 
} from '@solana/web3.js';
import { 
    createMint, 
    getOrCreateAssociatedTokenAccount, 
    mintTo, 
    Account, 
    createSetAuthorityInstruction, 
    AuthorityType
} from '@solana/spl-token';

const MintToken = () => {
  return (
    <div>
        Mint Token Section 
        <div>
            <button>Create Token</button>
            <button>MintToken</button>
            <button>Check balance</button>
            <button>Send Token</button>
      </div>
    </div>
  )
}

export default MintToken

