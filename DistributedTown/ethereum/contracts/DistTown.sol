pragma solidity >0.4.17 <0.7.0;

import "./contracts/apps/AragonApp.sol";

contract DistTown is AragonApp {

     uint256 public value;

    // wallet, skills, tokens

    struct skills{
        string[] CommunityLife;     // 12 dito
        string[] Home;              // 6 dito
        string[] Professional;      // 24 dito
    }

    struct wallet {
        uint tokenCount;
        skills Skills;
    }


    // community members
    address[] members = new address[];
    mapping(address => wallet) wallets;

    // join req 
    mapping(address=> string[]) newMemberShip;
    mapping(address=> address[]) approvals;

    // create roles
    bytes32 constant public VotingRight = keccak256("VotingRight");
    bytes32 constant public RewardRigth = keccak256("RewardRigth");

     function initialize(uint256 _initValue) public onlyInit {
        value = _initValue;
    }


    // to enter a community
    function tokenVotingReputation (address target) auth(VotingRight) external {
        require(approvals[target], "Not availaible");
        approvals[target].push(msg.sender);
        if(approvals.length > members.lenght/4)
        {
            approveMembership(target);
        }
    }

    function approveMembership (address target) internal {
        members.push[target];
        newMemberShip[target] = new string[];
        approvals[target] = new address[];
    }


    // end of enter communtity code
    

    // create wallet ( profile) 

    function createWallet (string[] community, string[] home, string[] professional)  external  {
        skills skillset = skills(community,home,professional);
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

    gig[] totalGigs = new gig[];

    function createGig (string label, string title, string description, uint256 reward) external {
        require(wallets[msg.sender].tokenCount > 20,"Not enough tokens to create gig");
        gig memory newGig = gig(label,title,description,reward,msg.sender);
    } 

    function getGigs () {
        return totalGigs;
    }

    function gigCompleted(address target , uint index) external {
        require(gig[index].creator == target , "Not permitted");

        gig Gig = totalGigs[index];
        wallets[target].tokenCount += Gig.reward;

        gig lastGig = totalGigs[totalGigs.lenght - 1];
        totalGigs[index] = lastGig;
        delete totalGigs[totalGigs.lenght-1];
    }
}