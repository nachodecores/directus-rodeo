module.exports = function registerHook({ filter, logger }) {
  logger.info("🟢 Hook cargado: update-animal-dates"); // más confiable que console.log

  filter("items.create.matings", async (input, { database }) => {
    logger.info(`📥 Nuevo servicio registrado para animal ${input.animal_id}`);
    return input;
  });
};
