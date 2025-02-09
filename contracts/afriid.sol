// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.0<0.9.0;

/// @title AfriId Contract
/// @notice this contract helps in the registration, storage and retrieval of digital data
contract Afriid {

    /// @dev struct to hold the personal information of the digital id
    /// @param fullName full name of the person as it appears on the legal document
    /// @param dateOfBirth date of birth of the person converted to a timestamp
    /// @param email email address of the person
    /// @param phoneNumber phone number of the person
    /// @param fingerprintHash the captured fingerprint hash of the digital data submitted by the person
    /// @param photoDirectory directory of the uploaded image
    /// @param documentDirectory directory of the uploaded document   
    struct PersonalInformation {
        string fullName;
        uint dateOfBirth;
        string email;
        string phoneNumber;
        string photoDirectory;
        string fingerprintHash;
        string documentDirectory;
    }

    /// @notice stores the count of digital data entries as integer
    uint public digitalInformationCount;

    
    /// @notice mapping to store the structure data of the digital identity to the wallet address
    /// @dev public visibility will allow it to be displayed automatically as a getter function
    mapping(address => PersonalInformation) public digitalIdentities;

    /// @notice takes data and save it to the blockchain
    /// @param _fullName full naame in the digital data
    /// @param _dateOfBirth date of birth in the digital data formatted as a timestamp
    /// @param _email email in the digital data
    /// @param _phoneNumber phone number parameter in the digital identity
    /// @param _photoDirectory stores the directory of the uploaded image as a string
    /// @param _fingerprintHash converted fingerprint received as a hash inform of a string
    /// @param _documentDirectory directory passed as a string
    /// @dev this function takes passed parameters from the front end, processes and stores them to the blockchain

    function registerIdentity(string memory _fullName, uint _dateOfBirth, string memory _email, string memory _phoneNumber, string memory _photoDirectory, string memory _fingerprintHash, string memory _documentDirectory) public {

        // create a new person struct and store it in the mapping
        digitalIdentities[msg.sender] = PersonalInformation({
            fullName: _fullName,
            dateOfBirth: _dateOfBirth,
            email: _email,
            phoneNumber: _phoneNumber,
            photoDirectory: _photoDirectory, 
            fingerprintHash: _fingerprintHash,
            documentDirectory: _documentDirectory
        });

        digitalInformationCount++;


    }

    /// @notice retrieves a person digital details by their addresses
    /// @param _address address of the mapped digital identity
    /// @return PersonalInformation returns the personal information as a struct
    function viewIdentity(address _address) public view returns (PersonalInformation memory) {
        // retrieving the person struct from the mapping
        return digitalIdentities[_address];
    }   
}