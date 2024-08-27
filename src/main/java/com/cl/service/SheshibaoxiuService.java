package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.SheshibaoxiuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.SheshibaoxiuView;


/**
 * 设施报修
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface SheshibaoxiuService extends IService<SheshibaoxiuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<SheshibaoxiuView> selectListView(Wrapper<SheshibaoxiuEntity> wrapper);
   	
   	SheshibaoxiuView selectView(@Param("ew") Wrapper<SheshibaoxiuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<SheshibaoxiuEntity> wrapper);
   	

}

