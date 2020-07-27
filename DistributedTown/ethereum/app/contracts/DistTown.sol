pragma solidity >0.4.17 <0.7.0;
// pragma experimental ABIEncoderV2;

// import "https://github.com/aragon/aragonOS/blob/next/contracts/apps/AragonApp.sol";
import "./contracts/apps/AragonApp.sol";

contract DistTown is AragonApp {

     uint256 public value;

    constructor () public {
        value = 96000;
    }
    // wallet, skills, tokens

    struct skills{
        string CommunityLife;     // 12 dito
        string Home;              // 6 dito
        string Professional;      // 24 dito
    }

    struct wallet {
        uint tokenCount;
        skills Skills;
    }


    // community members
    address[] members = new address[](24);
    mapping(address => wallet) wallets;

    // join req 
    mapping(address=> string[]) newMemberShip;
    mapping(address=> address[]) approvals;

    // create roles
    bytes32 constant public VotingRight = keccak256("VotingRight");
    // bytes32 constant public RewardRigth = keccak256("RewardRigth");

     function initialize(uint256 _initValue) public onlyInit {
        value = _initValue;
    }


    // to enter a community
    function tokenVotingReputation (address target) auth(VotingRight) external returns (bool) {
        require(newMemberShip[target].length > 0,"Not availaible");
        approvals[target].push(msg.sender);
        if(members.length-1 > members.length/4)
        {
            approveMembership(target);
        }
        return true;
    }

    function approveMembership (address target) internal {
        members.push(target);
        newMemberShip[target] = [""];
        approvals[target] = [0x0];
    }


    // end of enter communtity code
    

    // create wallet ( profile) 

    function createWallet (string skill1, string skill2, string skill3)  external  {
        skills memory skillset = skills(skill1,skill2,skill3);
        wallets[msg.sender] = wallet(50,skillset);
    }


    // start of gig and award claiming system

    struct gig {
        string label;
        string title;
        string description;
        uint256 reward;
        address creator;
    }

    gig[] totalGigs;

    function createGig (string label, string title, string description, uint256 reward) external {
        require(wallets[msg.sender].tokenCount > 20,"Not enough tokens to create gig");
        gig memory newGig = gig(label,title,description,reward,msg.sender);
        totalGigs.push(newGig);
    } 

    function getGigs (uint256 index) returns (string,string,string,uint256) {
        gig data =  totalGigs[index];
        return (data.label,data.title,data.description,data.reward);
    }

    function gigCompleted(address target , uint256 index) external {
        require(totalGigs[index].creator == target , "Not permitted");

        gig memory Gig = totalGigs[index];
        wallets[target].tokenCount += Gig.reward;

        gig memory lastGig = totalGigs[totalGigs.length - 1];
        totalGigs[index] = lastGig;
        delete totalGigs[totalGigs.length-1];
    }
}