var func = require('../models/funcionarios')

exports.getFuncionarios = async(req, res) => {
    try {

        console.log('passei aqui');
        res.send(await func.funcionariosModel.find());

    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneFuncionario = async (req, res) => {   
  try {;
    res.status(201).json(await func.funcionariosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await func.funcionariosModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await func.funcionariosModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await func.funcionariosModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };