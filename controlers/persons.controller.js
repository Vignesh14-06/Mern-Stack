import PersonsData from "../model/person.model.js";

export const GetallPersons = async (req, res) => {
  try {
    const personsall = await PersonsData.find();
    res.status(200).json(personsall);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const GetPersonById = async (req, res) => {
  try {
    const getPersonById = await PersonsData.findById(req.params.id);
    if (!getPersonById) {
      return res.status(4001).json({ message: "User Not Found" });
    } else {
      return res.status(200).json(getPersonById);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const CreatePerson = async (req, res) => {
  const newPerson = new PersonsData(req.body);
  try {
    const { email } = newPerson;
    const existEmail = await PersonsData.findOne({ email });
    if (existEmail) {
      return res.status(401).json({ message: "User Email Id Already Exist" });
    }
    const createPerson = await newPerson.save();
    res.status(200).json({message:"User Created Successfully"},createPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const UpdatePerson = async (req, res) => {
  try {
    const updatePerson = await PersonsData.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({message:"User Updated Successfully"},updatePerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const DeletePersonById = async (req, res) => {
  try {
    const DeletePerson = await PersonsData.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({ message: "User Deleted Successfully" });
    res.json(DeletePerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
